import React from 'react';

import Ajv from 'ajv';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';
import { Button, ActionGroup } from '@patternfly/react-core';
import { AutoFields, AutoForm, ErrorsField } from 'uniforms-patternfly';
import ModelConversionTool from '../../../util/ModelConversionTool';

export interface IFormAction {
  id: string;
  label: string;
  primary?: boolean;
  onSubmit: (model: any) => void;
}

export interface IForm {
  schema: any;
  model?: any;
  actions?: IFormAction[];
}

interface IOwnProps {
  form: IForm;
}

const FormRendererComponent: React.FC<IOwnProps> = ({ form }) => {
  const convertDataBeforeValidate = (model, schema) => {
    const obj = {};
    Object.keys(model).forEach(property => {
      const properties = schema.properties[property];

      const value = model[property];

      if (value) {
        if (properties) {
          switch (properties.type) {
            case 'object':
              obj[property] = convertDataBeforeValidate(value, properties);
              break;
            case 'array':
              if (properties.items && properties.items.type === 'object') {
                obj[property] = value.map(item =>
                  convertDataBeforeValidate(item, properties.items)
                );
              } else {
                obj[property] = value;
              }
              break;
            case 'string':
              if (properties.format === 'date-time') {
                obj[property] = value.toISOString();
              } else {
                obj[property] = value;
              }
              break;
            default:
              obj[property] = value;
              break;
          }
        } else {
          obj[property] = value;
        }
      }
    });
    return obj;
  };

  const createValidator = schema => {
    const validator = ajv.compile(schema);
    return model => {
      const newModel = ModelConversionTool.convertDateToString(model, schema);
      validator(newModel);

      if (validator.errors && validator.errors.length) {
        throw { details: validator.errors };
      }
    };
  };

  const enabled = form.actions && form.actions.length > 0;

  const ajv = new Ajv({ allErrors: true, useDefaults: true });

  const bridge = new JSONSchemaBridge(
    form.schema,
    createValidator(form.schema)
  );

  const formData = ModelConversionTool.convertStringToDate(form.model, form.schema);

  let formAction;

  return (
    <AutoForm
      placeholder
      model={formData}
      disabled={!enabled}
      schema={bridge}
      onSubmit={formModel =>
        formAction ? formAction.onSubmit(formModel) : null
      }
      showInlineError
    >
      <ErrorsField />
      <AutoFields />
      <ActionGroup>
        {enabled
          ? form.actions.map(action => {
              return (
                <Button
                  key={'submit-' + action.id}
                  type="submit"
                  variant={action.primary ? 'primary' : 'secondary'}
                  onClick={() => (formAction = action)}
                >
                  {action.label}
                </Button>
              );
            })
          : null}
      </ActionGroup>
    </AutoForm>
  );
};

export default FormRendererComponent;

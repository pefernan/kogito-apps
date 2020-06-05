import React, { useEffect } from 'react';

export interface IFormAction {
  id: string;
  label: string;
  primary?: boolean;
  onSubmit: (model: any) => void;
}

export interface IForm {
  template: string;
  schema: any;
  model?: any;
  actions?: IFormAction[];
}

interface IOwnProps {
  form: IForm;
}

interface ISubmittedForm {
  action: string;
  formData: any;
}

const TemplateFormRenderer: React.FC<IOwnProps> = ({ form }) => {
  const mustache = require('mustache');

  useEffect(() => {
    window.addEventListener('message', event => {
      const formData: ISubmittedForm = JSON.parse(event.data);

      if (formData) {
        form.actions.forEach(action => {
          const actionId = action.id ? action.id : '';
          if (actionId === formData.action) {
            action.onSubmit(formData.formData);
          }
        });
      }
    });
  }, []);

  const templateData = {
    data: JSON.stringify(form.model),
    schema: JSON.stringify(form.schema),
    actions: form.actions.map(action => {
      return {
        id: action.id ? action.id : '',
        label: action.label,
        primary: action.primary ? action.primary : false
      };
    })
  };

  const rendered = mustache.render(form.template, templateData);

  const iframe = (
    <iframe
      className="pf-u-w-100 pf-u-h-100"
      sandbox="allow-scripts"
      srcDoc={rendered}
    />
  );

  return <div className="pf-u-w-100 pf-u-h-100">{iframe}</div>;
};

export default TemplateFormRenderer;

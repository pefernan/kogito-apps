import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Card,
  CardBody,
  TextInput,
  FormGroup,
  Checkbox
} from '@patternfly/react-core';

const Form__hiring_HRInterview: React.FC<any> = (props: any) => {
  const [formApi, set__formApi] = useState<any>();
  const [candidate__email, set__candidate__email] = useState<string>('');
  const [candidate__name, set__candidate__name] = useState<string>('');
  const [candidate__salary, set__candidate__salary] = useState<number>(0);
  const [candidate__skills, set__candidate__skills] = useState<string>('');
  const [approve, set__approve] = useState<boolean>(false);

  const salaryRef = useRef();

  const bindModel = model => {
    set__candidate__name(model?.candidate?.name);
    set__candidate__email(model?.candidate?.email);
    set__candidate__salary(model?.candidate?.salary);
    set__candidate__skills(model?.candidate?.skills);
  };

  const validateForm = useCallback(() => {
    // @ts-ignore
    console.log('validate form', candidate__salary);
    // @ts-ignore
    if (salaryRef.current.value > 1000000) {
      // @ts-ignore
      throw new Error('Salary too high ' + salaryRef.current!.value);
      return candidate__salary;
    }
  }, [candidate__salary]);

  console.log('render salary: ' + candidate__salary);
  try {
    console.log('render salary: ' + validateForm());
  } catch (err) {
    console.log(err);
  }

  useEffect(() => {
    console.log('salary change: ' + candidate__salary);
  }, [candidate__salary]);

  useEffect(() => {
    console.log('skills change: ' + candidate__skills);
  }, [candidate__skills]);

  const getFormData = () => {
    return {
      approve
    };
  };

  useEffect(() => {
    const api = window.Form.openForm({
      bridge: {
        onOpen: args => {
          console.log('ON OPEN', args);
          bindModel(args.data);
        },
        getFormData: () => getFormData(),
        beforeSubmit: () => {
          validateForm();
        },
        afterSubmit: result => {
          if (result.result === 'error') {
            window.alert(result.info);
          } else {
            console.log('submitted: ', result);
          }
        }
      }
    });
    console.log('the api', api);
    set__formApi(api);
  }, []);

  return (
    <div className={'pf-c-form'}>
      <Card>
        <CardBody className="pf-c-form">
          <label>
            <b>Candidate</b>
          </label>
          <FormGroup
            fieldId={'uniforms-0000-0002'}
            label={'Email'}
            isRequired={false}
          >
            <TextInput
              name={'candidate.email'}
              id={'uniforms-0000-0002'}
              isDisabled={false}
              placeholder={''}
              type={'text'}
              value={candidate__email}
              onChange={set__candidate__email}
            />
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-0003'}
            label={'Name'}
            isRequired={false}
          >
            <TextInput
              name={'candidate.name'}
              id={'uniforms-0000-0003'}
              isDisabled={false}
              placeholder={''}
              type={'text'}
              value={candidate__name}
              onChange={set__candidate__name}
            />
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-0005'}
            label={'Salary'}
            isRequired={false}
          >
            <TextInput
              type={'number'}
              name={'candidate.salary'}
              isDisabled={false}
              id={'uniforms-0000-0005'}
              placeholder={''}
              step={1}
              value={candidate__salary}
              onChange={newValue => set__candidate__salary(Number(newValue))}
              ref={salaryRef}
            />
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-0006'}
            label={'Skills'}
            isRequired={false}
          >
            <TextInput
              name={'candidate.skills'}
              id={'uniforms-0000-0006'}
              isDisabled={false}
              placeholder={''}
              type={'text'}
              value={candidate__skills}
              onChange={set__candidate__skills}
            />
          </FormGroup>
        </CardBody>
      </Card>
      <FormGroup fieldId="uniforms-0000-0008">
        <Checkbox
          isChecked={approve}
          isDisabled={false}
          id={'uniforms-0000-0008'}
          name={'approve'}
          label={'Approve'}
          onChange={set__approve}
        />
      </FormGroup>
    </div>
  );
};

export default Form__hiring_HRInterview;

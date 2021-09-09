module.exports = [
    {
        Form: {
            name: "html_HRInterview",
            source: {

                "source-content": `
<div> 
    <div class="form-check"> 
        <input type="checkbox" id="uniforms-0001-0001" name="approve" class="form-check-input" /> 
        <label class="form-check-label" for="uniforms-0001-0001">Approve</label> </div> <fieldset disabled> <legend>Candidate</legend> <div> <div class="form-group"> <label for="uniforms-0001-0004">Email</label> <input type="text" id="uniforms-0001-0004" name="candidate.email" class="form-control" disabled value="" /> </div> <div class="form-group"> <label for="uniforms-0001-0005">Name</label> <input type="text" id="uniforms-0001-0005" name="candidate.name" class="form-control" disabled value="" /> </div> <div class="form-group"> <label for="uniforms-0001-0007">Salary</label> <input type="number" class="form-control" id="uniforms-0001-0007" name="candidate.salary" disabled step="1" value="" /> </div> <div class="form-group"> <label for="uniforms-0001-0008">Skills</label> <input type="text" id="uniforms-0001-0008" name="candidate.skills" class="form-control" disabled value="" /> </div> </div> </fieldset> </div>`
            },
            formConfiguration: {
                "resources": {
                    "styles": {
                        "bootstrap.min.css": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    },
                    "scripts": {
                        "bootstrap.min.js": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
                        "jquery.js": "https://code.jquery.com/jquery-3.2.1.slim.min.js",
                        "popper.js": "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                    }
                },
                "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"type\":\"object\",\"properties\":{\"candidate\":{\"type\":\"object\",\"properties\":{\"email\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"salary\":{\"type\":\"integer\"},\"skills\":{\"type\":\"string\"}},\"input\":true},\"approve\":{\"type\":\"boolean\",\"output\":true}}}"
            }
        }
    },
    {
        Form: {
            name: "html_ITInterview",
            source: {

                "source-content": `<div> <div class="form-check"> <input type="checkbox" id="uniforms-0001-0001" name="approve" class="form-check-input" /> <label class="form-check-label" for="uniforms-0001-0001">Approve</label> </div> <fieldset disabled> <legend>Candidate</legend> <div> <div class="form-group"> <label for="uniforms-0001-0004">Email</label> <input type="text" id="uniforms-0001-0004" name="candidate.email" class="form-control" disabled value="" /> </div> <div class="form-group"> <label for="uniforms-0001-0005">Name</label> <input type="text" id="uniforms-0001-0005" name="candidate.name" class="form-control" disabled value="" /> </div> <div class="form-group"> <label for="uniforms-0001-0007">Salary</label> <input type="number" class="form-control" id="uniforms-0001-0007" name="candidate.salary" disabled step="1" value="" /> </div> <div class="form-group"> <label for="uniforms-0001-0008">Skills</label> <input type="text" id="uniforms-0001-0008" name="candidate.skills" class="form-control" disabled value="" /> </div> </div> </fieldset> </div>`
            },
            formConfiguration: {
                "resources": {
                    "styles": {
                        "bootstrap.min.css": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    },
                    "scripts": {
                        "bootstrap.min.js": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
                        "jquery.js": "https://code.jquery.com/jquery-3.2.1.slim.min.js",
                        "popper.js": "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                    }
                },
                "schema": "{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"type\":\"object\",\"properties\":{\"candidate\":{\"type\":\"object\",\"properties\":{\"email\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"salary\":{\"type\":\"integer\"},\"skills\":{\"type\":\"string\"}},\"input\":true},\"approve\":{\"type\":\"boolean\",\"output\":true}}}"
            }
        }
    },
    {
        Form: {
            name: "hiring_HRInterview",
            source: {
                "source-content": `
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  TextInput,
  FormGroup,
  Checkbox,
} from '@patternfly/react-core';

const Form__hiring_HRInterview: React.FC<any> = (props: any) => {
  const [formApi, set__formApi] = useState<any>();
  const [candidate__email, set__candidate__email] = useState<string>("");
  const [candidate__name, set__candidate__name] = useState<string>("");
  const [candidate__salary, set__candidate__salary] = useState<number>(0);
  const [candidate__skills, set__candidate__skills] = useState<string>("");
  const [approve, set__approve] = useState<boolean>(false);
  
  const bindModel = (model) => {
    set__candidate__name(model?.candidate?.name);
    set__candidate__email(model?.candidate?.email);
    set__candidate__salary(model?.candidate?.salary);
  }

  const validateForm = () => {
    console.log("validate form", candidate__salary);
    console.log("validate form", candidate__skills);
    if(candidate__salary > 1000000) {
      throw new Error("Salary too high " + candidate__salary);
    }
  }
  useEffect(() => {
    console.log("salary change: " + candidate__salary);
  }, [candidate__salary]);
  
  useEffect(() => {
    console.log("skills change: " + candidate__skills);
  }, [candidate__skills]);
  
  const getFormData = () => {
    return {
      approve
    }
  };
  
  useEffect(() => {
    const api = window.Form.openForm(
      {
        onOpen: (args) => {
          console.log('ON OPEN', args)
          bindModel(args.data)
        },
        getFormData: () => getFormData(),
        beforeSubmit: () => {
          validateForm();
        },
        afterSubmit: (result) => {
          if(result.result === 'error') {
            window.alert(result.info);
          } else {
            console.log("submitted: ", result);            
          }
        }
      }
    );
    console.log('the api', api);
    set__formApi(api);
  }, []);
  
  useEffect(() => {
    if(formApi) {
      formApi.init();
    }
  }, [formApi])
  return (
    <div className={'pf-c-form'}>
      <Card>
        <CardBody className='pf-c-form'>
          <label>
            <b>Candidate</b>
          </label>
          <FormGroup
            fieldId={'uniforms-0000-0002'}
            label={'Email'}
            isRequired={false}>
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
            isRequired={false}>
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
            isRequired={false}>
            <TextInput
              type={'number'}
              name={'candidate.salary'}
              isDisabled={false}
              id={'uniforms-0000-0005'}
              placeholder={''}
              step={1}
              value={candidate__salary}
              onChange={set__candidate__salary}
            />
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-0006'}
            label={'Skills'}
            isRequired={false}>
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
      <FormGroup fieldId='uniforms-0000-0008'>
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

export default Form__hiring_HRInterview;`
            },
            formConfiguration: {
                resources: {
                    styles: {},
                    scripts: {}
                },
                schema: '{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"approve":{"type":"boolean","output":true},"candidate":{"type":"object","properties":{"email":{"type":"string"},"name":{"type":"string"},"salary":{"type":"integer"},"skills":{"type":"string"}},"input":true}}}'
            }
        }
    },
    {
        Form: {
            name: "hiring_ITInterview",
            source: {
                "source-content": `import React, { useState } from 'react';
                import {
                  Checkbox,
                  FormGroup,
                  Card,
                  CardBody,
                  TextInput,
                } from '@patternfly/react-core';
                
                const Form__hiring_ITInterview: React.FC<any> = (props: any) => {
                  const [approve, set__approve] = useState<boolean>();
                  const [candidate__email, set__candidate__email] = useState<string>();
                  const [candidate__name, set__candidate__name] = useState<string>();
                  const [candidate__salary, set__candidate__salary] = useState<string>();
                  const [candidate__skills, set__candidate__skills] = useState<string>();
                
                  return (
                    <div className={'pf-c-form'}>
                      <FormGroup fieldId='uniforms-0001-0001'>
                        <Checkbox
                          isChecked={approve}
                          isDisabled={false}
                          id={'uniforms-0001-0001'}
                          name={'approve'}
                          label={'Approve'}
                          onChange={set__approve}
                        />
                      </FormGroup>
                      <Card>
                        <CardBody className='pf-c-form'>
                          <label>
                            <b>Candidate</b>
                          </label>
                          <FormGroup
                            fieldId={'uniforms-0001-0004'}
                            label={'Email'}
                            isRequired={false}>
                            <TextInput
                              name={'candidate.email'}
                              id={'uniforms-0001-0004'}
                              isDisabled={true}
                              placeholder={''}
                              type={'text'}
                              value={candidate__email}
                              onChange={set__candidate__email}
                            />
                          </FormGroup>
                          <FormGroup
                            fieldId={'uniforms-0001-0005'}
                            label={'Name'}
                            isRequired={false}>
                            <TextInput
                              name={'candidate.name'}
                              id={'uniforms-0001-0005'}
                              isDisabled={true}
                              placeholder={''}
                              type={'text'}
                              value={candidate__name}
                              onChange={set__candidate__name}
                            />
                          </FormGroup>
                          <FormGroup
                            fieldId={'uniforms-0001-0007'}
                            label={'Salary'}
                            isRequired={false}>
                            <TextInput
                              type={'number'}
                              name={'candidate.salary'}
                              isDisabled={true}
                              id={'uniforms-0001-0007'}
                              placeholder={''}
                              step={1}
                              value={candidate__salary}
                              onChange={set__candidate__salary}
                            />
                          </FormGroup>
                          <FormGroup
                            fieldId={'uniforms-0001-0008'}
                            label={'Skills'}
                            isRequired={false}>
                            <TextInput
                              name={'candidate.skills'}
                              id={'uniforms-0001-0008'}
                              isDisabled={true}
                              placeholder={''}
                              type={'text'}
                              value={candidate__skills}
                              onChange={set__candidate__skills}
                            />
                          </FormGroup>
                        </CardBody>
                      </Card>
                    </div>
                  );
                };
                
                export default Form__hiring_ITInterview;`
            },
            formConfiguration: {
                resources: {
                    styles: {},
                    scripts: {}
                },
                schema: '{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"approve":{"type":"boolean","output":true},"candidate":{"type":"object","properties":{"email":{"type":"string"},"name":{"type":"string"},"salary":{"type":"integer"},"skills":{"type":"string"}},"input":true}}}'
            }
        }
    }
]
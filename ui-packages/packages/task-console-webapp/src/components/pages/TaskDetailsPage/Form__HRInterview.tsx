import React, { useEffect, useState } from 'react';
import {
  Alert,
  Card,
  CardBody,
  Checkbox,
  DatePicker,
  Flex,
  FlexItem,
  FormGroup,
  InputGroup,
  Radio,
  Select,
  SelectOption,
  SelectOptionObject,
  SelectVariant,
  TextInput,
  TimePicker,
  Button
} from '@patternfly/react-core';
import { FormApi, FormContext } from '@kie-apps/forms-api/dist/form';
import { open } from '@kie-apps/forms-api';

const data = {
  personalData: {
    name: 'Jon',
    email: 'jon@snow.com'
  },
  address: {
    street: 'castle str.',
    num: 1,
    cp: '08870',
    city: 'winterfell'
  },
  interview: {
    position: 'UX',
    otherPositions: ['HR', 'UX'],
    skills: ['Java', 'React', 'TypeScript', 'Quarkus'],
    age: 34,
    salary: 1000.99,
    rating: 3,
    hire: true,
    hidingDate: '1981-02-24T06:35'
  }
};
const jsonSchema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'object',
  properties: {
    personalData: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        email: {
          type: 'string'
        }
      }
    },
    address: {
      type: 'object',
      properties: {
        street: {
          type: 'string'
        },
        num: {
          type: 'integer'
        },
        cp: {
          type: 'string'
        },
        city: {
          type: 'string'
        }
      }
    },
    interview: {
      type: 'object',
      properties: {
        position: {
          type: 'string',
          enum: ['Developer', 'HR', 'UX']
        },
        age: {
          type: 'integer'
        },
        salary: {
          type: 'number'
        },
        rating: {
          type: 'integer',
          enum: [1, 2, 3, 4, 5],
          uniforms: { checkboxes: true }
        },
        hire: {
          type: 'boolean'
        },
        hidingDate: {
          type: 'string',
          format: 'date-time'
        },
        otherPositions: {
          type: 'array',
          enum: ['Developer', 'HR', 'UX']
        },
        skills: {
          type: 'array',
          enum: ['Java', 'React', 'TypeScript', 'Quarkus']
        }
      }
    }
  }
};

const Form__HRInterview: React.FC<any> = (props: any) => {
  // @ts-ignore
  const [model, set__model] = useState<any>({});
  const [personalData__name, set__personalData__name] = useState<string>('');
  const [personalData__email, set__personalData__email] = useState<string>();
  const [address__street, set__address__street] = useState<string>();
  const [address__num, set__address__num] = useState<string>();
  const [address__cp, set__address__cp] = useState<string>();
  const [address__city, set__address__city] = useState<string>();
  const [interview__position, set__interview__position] = useState<string>();
  const [
    interview__position__expanded,
    set__interview__position__expanded
  ] = useState<boolean>(false);
  const [interview__otherPositions, set__interview__otherPositions] = useState<
    string[]
  >([]);
  const [
    interview__otherPositions__expanded,
    set__interview__otherPositions__expanded
  ] = useState<boolean>(false);
  const [interview__skills, set__interview__skills] = useState<string[]>([]);
  const [interview__age, set__interview__age] = useState<string>();
  const [interview__salary, set__interview__salary] = useState<string>();
  const [interview__rating, set__interview__rating] = useState<string>();
  const [interview__hire, set__interview__hire] = useState<boolean>();
  const [interview__hidingDate, set__interview__hidingDate] = useState<Date>();
  // @ts-ignore
  const [friends, set__friends] = useState<any[]>([]);
  const [formApi, set__formApi] = useState<FormApi>();

  const handleSelect = (
    newSelection: string | SelectOptionObject,
    isPlaceHolder: boolean,
    currentSelection: string,
    setSelection: (val: string) => void,
    setExpanded: (expanded: boolean) => void
  ) => {
    if (isPlaceHolder) {
      setSelection('');
      setExpanded(false);
    } else {
      const parsedSelection = newSelection.toString
        ? newSelection.toString()
        : (newSelection as string);
      setSelection(parsedSelection || '');
      setExpanded(false);
    }
  };
  const handleMultipleSelect = (
    newSelection: string | SelectOptionObject,
    isPlaceHolder: boolean,
    currentValue: string[],
    setSelection: (val: string[]) => void
  ) => {
    if (isPlaceHolder) {
      setSelection([]);
    } else {
      const parseSelection = (): string[] => {
        const selectedValue = newSelection.toString
          ? newSelection.toString()
          : (newSelection as string);
        if (currentValue.indexOf(selectedValue) != -1) {
          return currentValue.filter(s => s !== selectedValue);
        }
        return [selectedValue, ...currentValue];
      };
      setSelection(parseSelection());
    }
  };
  const handleCheckboxGroupChange = (
    checkboxValue: string,
    groupValue: string[],
    setter: (val: string[]) => void
  ): void => {
    const newValues = [...groupValue];
    const index = newValues.indexOf(checkboxValue);
    if (index != -1) {
      newValues.splice(index, 1);
    } else {
      newValues.push(checkboxValue);
    }
    setter(newValues);
  };
  const parseDate = (date?: Date): string => {
    if (!date) {
      return '';
    }
    return date.toISOString().slice(0, -14);
  };
  const onDateChange = (
    newValue: string,
    setter: (date: Date) => void,
    previousValue?: Date
  ) => {
    if (newValue) {
      const newDate = new Date(newValue);
      const time = parseTime(previousValue);
      if (time !== '') {
        newDate.setHours(parseInt(time && time.split(':')[0]));
        newDate.setMinutes(parseInt(time && time.split(':')[1].split(' ')[0]));
      }
      setter(newDate);
    }
  };
  const parseTime = (date?: Date): string => {
    if (!date) {
      return '';
    }
    let isAm = true;
    let hours = date.getHours();
    if (hours > 12) {
      hours %= 12;
      isAm = false;
    }
    let minutes = date.getMinutes().toString();
    if (minutes.length == 1) {
      minutes = '0' + minutes;
    }
    return `${hours}:${minutes} ${isAm ? 'AM' : 'PM'}`;
  };
  const onTimeChange = (
    time: string,
    setter: (date: Date) => void,
    previousValue?: Date,
    hours?: number,
    minutes?: number
  ) => {
    if (previousValue) {
      const newDate = new Date(previousValue);
      if (hours && minutes) {
        newDate.setHours(hours);
        newDate.setMinutes(minutes);
      } else if (time !== '') {
        const localeHours = parseInt(time && time.split(':')[0]);
        const localeMinutes = parseInt(
          time && time.split(':')[1].split(' ')[0]
        );
        if (!isNaN(localeHours) && !isNaN(localeMinutes)) {
          newDate.setHours(localeHours);
          newDate.setMinutes(localeMinutes);
        }
      }
      setter(newDate);
    }
  };

  useEffect(() => {
    // @ts-ignore
    const api: FormApi = open({
      container: document.getElementById('container'),
      bindings: [
        {
          path: 'personalData.name',
          getValue: () => {
            return personalData__name;
          },
          setValue: newValue => {
            set__personalData__name(newValue);
          },
          container: () =>
            document.getElementById('personalData__name__container')
        },
        {
          path: 'interview.skills',
          setValue: newValue => {
            console.log('setting skills:', newValue);
            set__interview__skills(newValue);
          },
          getValue: () => {
            console.log('getting skills:', interview__skills);
            return interview__skills;
          },
          container: () =>
            document.getElementById('interview__skills__container')
        }
        // { path: "interview.rating", setValue: (newValue) => set__interview__rating(newValue), getValue: () => interview__rating, container: () => document.getElementById('interview__rating__container')}
      ],
      schema: jsonSchema,
      model: data,
      onOpen: (ctx: FormContext) => {
        console.log('context:', ctx.model);
        set__model(ctx.model);
      }
    });
    api.onModelChange = (path, newValue, oldValue) => {
      console.log(
        `modified property '${path}' from '${oldValue}' to '${newValue}'`
      );
    };
    set__formApi(api);
  }, []);

  useEffect(() => {
    console.log('model change: ', model);
  }, [model]);

  console.log('render form!', personalData__name, formApi);
  return (
    <div className={'pf-c-form'}>
      <Card>
        <CardBody className="pf-c-form">
          <label>
            <b>Personal data</b>
          </label>
          <FormGroup
            fieldId={'uniforms-0000-0002'}
            id={'personalData__name__container'}
            label={'Name'}
            isRequired={true}
          >
            <TextInput
              name={'personalData.name'}
              id={'uniforms-0000-0002'}
              isDisabled={false}
              placeholder={''}
              type={'text'}
              value={personalData__name}
              onChange={set__personalData__name}
            />
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-0003'}
            label={'Email'}
            isRequired={true}
          >
            <TextInput
              name={'personalData.email'}
              id={'uniforms-0000-0003'}
              isDisabled={false}
              placeholder={''}
              type={'text'}
              value={personalData__email}
              onChange={set__personalData__email}
            />
          </FormGroup>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="pf-c-form">
          <label>
            <b>Address</b>
          </label>
          <FormGroup
            fieldId={'uniforms-0000-0006'}
            label={'Street'}
            isRequired={true}
          >
            <TextInput
              name={'address.street'}
              id={'uniforms-0000-0006'}
              isDisabled={false}
              placeholder={''}
              type={'text'}
              value={address__street}
              onChange={set__address__street}
            />
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-0008'}
            label={'Num'}
            isRequired={true}
          >
            <TextInput
              type={'number'}
              name={'address.num'}
              isDisabled={false}
              id={'uniforms-0000-0008'}
              placeholder={''}
              step={1}
              value={address__num}
              onChange={set__address__num}
            />
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-0009'}
            label={'Cp'}
            isRequired={true}
          >
            <TextInput
              name={'address.cp'}
              id={'uniforms-0000-0009'}
              isDisabled={false}
              placeholder={''}
              type={'text'}
              value={address__cp}
              onChange={set__address__cp}
            />
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-000a'}
            label={'City'}
            isRequired={true}
          >
            <TextInput
              name={'address.city'}
              id={'uniforms-0000-000a'}
              isDisabled={false}
              placeholder={''}
              type={'text'}
              value={address__city}
              onChange={set__address__city}
            />
          </FormGroup>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="pf-c-form">
          <label>
            <b>Interview</b>
          </label>
          <FormGroup
            fieldId={'uniforms-0000-000e'}
            label={'Position'}
            isRequired={true}
          >
            <Select
              id={'uniforms-0000-000e'}
              name={'interview.position'}
              variant={SelectVariant.single}
              isDisabled={false}
              placeholderText={''}
              isOpen={interview__position__expanded}
              selections={interview__position}
              onToggle={isOpen => set__interview__position__expanded(isOpen)}
              onSelect={(event, value, isPlaceHolder) => {
                handleSelect(
                  value,
                  isPlaceHolder,
                  interview__position,
                  set__interview__position,
                  set__interview__position__expanded
                );
              }}
              value={interview__position}
            >
              <SelectOption key={'Developer'} value={'Developer'}>
                Developer
              </SelectOption>
              <SelectOption key={'HR'} value={'HR'}>
                HR
              </SelectOption>
              <SelectOption key={'UX'} value={'UX'}>
                UX
              </SelectOption>
            </Select>
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-000g'}
            label={'Other positions'}
            isRequired={true}
          >
            <Select
              id={'uniforms-0000-000g'}
              name={'interview.otherPositions'}
              variant={SelectVariant.typeaheadMulti}
              isDisabled={false}
              placeholderText={''}
              isOpen={interview__otherPositions__expanded}
              selections={interview__otherPositions}
              onToggle={isOpen =>
                set__interview__otherPositions__expanded(isOpen)
              }
              onSelect={(event, value, isPlaceHolder) => {
                handleMultipleSelect(
                  value,
                  isPlaceHolder,
                  interview__otherPositions,
                  set__interview__otherPositions
                );
              }}
              value={interview__otherPositions}
            >
              <SelectOption key={'Developer'} value={'Developer'}>
                Developer
              </SelectOption>
              <SelectOption key={'HR'} value={'HR'}>
                HR
              </SelectOption>
              <SelectOption key={'UX'} value={'UX'}>
                UX
              </SelectOption>
            </Select>
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-000i'}
            id={'interview__skills__container'}
            label={'Skills'}
            isRequired={true}
          >
            <Checkbox
              key={'uniforms-0000-000i-Java'}
              id={'uniforms-0000-000i-Java'}
              name={'interview.skills'}
              aria-label={'interview.skills'}
              label={'Java'}
              isDisabled={false}
              isChecked={interview__skills.indexOf('Java') != -1}
              onChange={() =>
                handleCheckboxGroupChange(
                  'Java',
                  interview__skills,
                  set__interview__skills
                )
              }
              value={'Java'}
            />
            <Checkbox
              key={'uniforms-0000-000i-React'}
              id={'uniforms-0000-000i-React'}
              name={'interview.skills'}
              aria-label={'interview.skills'}
              label={'React'}
              isDisabled={false}
              isChecked={interview__skills.indexOf('React') != -1}
              onChange={() =>
                handleCheckboxGroupChange(
                  'React',
                  interview__skills,
                  set__interview__skills
                )
              }
              value={'React'}
            />
            <Checkbox
              key={'uniforms-0000-000i-TypeScript'}
              id={'uniforms-0000-000i-TypeScript'}
              name={'interview.skills'}
              aria-label={'interview.skills'}
              label={'TypeScript'}
              isDisabled={false}
              isChecked={interview__skills.indexOf('TypeScript') != -1}
              onChange={() =>
                handleCheckboxGroupChange(
                  'TypeScript',
                  interview__skills,
                  set__interview__skills
                )
              }
              value={'TypeScript'}
            />
            <Checkbox
              key={'uniforms-0000-000i-Quarkus'}
              id={'uniforms-0000-000i-Quarkus'}
              name={'interview.skills'}
              aria-label={'interview.skills'}
              label={'Quarkus'}
              isDisabled={false}
              isChecked={interview__skills.indexOf('Quarkus') != -1}
              onChange={() =>
                handleCheckboxGroupChange(
                  'Quarkus',
                  interview__skills,
                  set__interview__skills
                )
              }
              value={'Quarkus'}
            />
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-000k'}
            label={'Age'}
            isRequired={true}
          >
            <TextInput
              type={'number'}
              name={'interview.age'}
              isDisabled={false}
              id={'uniforms-0000-000k'}
              placeholder={''}
              step={1}
              max={99}
              min={18}
              value={interview__age}
              onChange={set__interview__age}
            />
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-000m'}
            label={'Salary'}
            isRequired={true}
          >
            <TextInput
              type={'number'}
              name={'interview.salary'}
              isDisabled={false}
              id={'uniforms-0000-000m'}
              placeholder={''}
              step={0.01}
              max={1000.5}
              value={interview__salary}
              onChange={set__interview__salary}
            />
          </FormGroup>
          <FormGroup
            id={'interview__rating__container'}
            fieldId={'uniforms-0000-000o'}
            label={'Rating'}
            isRequired={true}
          >
            <div>
              <Radio
                key={'1'}
                id={'uniforms-0000-000o-1'}
                name={'interview.rating'}
                isChecked={'1' === interview__rating}
                isDisabled={false}
                label={'1'}
                value={'1'}
                aria-label={'interview.rating'}
                onChange={() => set__interview__rating('1')}
              />
              <Radio
                key={'2'}
                id={'uniforms-0000-000o-2'}
                name={'interview.rating'}
                isChecked={'2' === interview__rating}
                isDisabled={false}
                label={'2'}
                value={'2'}
                aria-label={'interview.rating'}
                onChange={() => set__interview__rating('2')}
              />
              <Radio
                key={'3'}
                id={'uniforms-0000-000o-3'}
                name={'interview.rating'}
                isChecked={'3' === interview__rating}
                isDisabled={false}
                label={'3'}
                value={'3'}
                aria-label={'interview.rating'}
                onChange={() => set__interview__rating('3')}
              />
              <Radio
                key={'4'}
                id={'uniforms-0000-000o-4'}
                name={'interview.rating'}
                isChecked={'4' === interview__rating}
                isDisabled={false}
                label={'4'}
                value={'4'}
                aria-label={'interview.rating'}
                onChange={() => set__interview__rating('4')}
              />
              <Radio
                key={'5'}
                id={'uniforms-0000-000o-5'}
                name={'interview.rating'}
                isChecked={'5' === interview__rating}
                isDisabled={false}
                label={'5'}
                value={'5'}
                aria-label={'interview.rating'}
                onChange={() => set__interview__rating('5')}
              />
            </div>
          </FormGroup>
          <FormGroup fieldId="uniforms-0000-000q">
            <Checkbox
              isChecked={interview__hire}
              isDisabled={false}
              id={'uniforms-0000-000q'}
              name={'interview.hire'}
              label={'Hire'}
              onChange={set__interview__hire}
            />
          </FormGroup>
          <FormGroup
            fieldId={'uniforms-0000-000s'}
            label={'Hiding date'}
            isRequired={true}
          >
            <Flex direction={{ default: 'column' }} id={'uniforms-0000-000s'}>
              <FlexItem>
                <InputGroup style={{ background: 'transparent' }}>
                  <DatePicker
                    id={'date-picker-uniforms-0000-000s'}
                    isDisabled={false}
                    name={'interview.hidingDate'}
                    onChange={newDate =>
                      onDateChange(
                        newDate,
                        set__interview__hidingDate,
                        interview__hidingDate
                      )
                    }
                    value={parseDate(interview__hidingDate)}
                  />
                  <TimePicker
                    id={'time-picker-uniforms-0000-000s'}
                    isDisabled={false}
                    name={'interview.hidingDate'}
                    onChange={(time, hours?, minutes?) =>
                      onTimeChange(
                        time,
                        set__interview__hidingDate,
                        interview__hidingDate,
                        hours,
                        minutes
                      )
                    }
                    style={{ width: '120px' }}
                    defaultTime={parseTime(interview__hidingDate)}
                  />
                </InputGroup>
              </FlexItem>
            </Flex>
          </FormGroup>
        </CardBody>
      </Card>
      <FormGroup
        fieldId={'uniforms-0000-000u'}
        label={'Friends'}
        isRequired={true}
      >
        <Alert variant="warning" title="Unsupported field type: Array">
          Cannot find form control for property <code>friends</code> with type{' '}
          <code>Array</code>:<br />
          Some complex property types, such as <code>
            Array&lt;object&gt;
          </code>{' '}
          aren&quot;t yet supported, however, you can still write your own
          component into the form and use the already existing states{' '}
          <code>const [ friends, set__friends ]</code>.
        </Alert>
      </FormGroup>
      <Button
        onClick={() => {
          console.log(formApi.getModel());
          model.personalData.name = 'Pere Fernandez';
        }}
      >
        Test Submit
      </Button>
    </div>
  );
};

export default Form__HRInterview;

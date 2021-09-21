import React, { useCallback, useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  TextInput,
  FormGroup,
  SelectOption,
  SelectOptionObject,
  Select,
  SelectVariant,
  Checkbox,
  Radio,
  DatePicker,
  Flex,
  FlexItem,
  InputGroup,
  TimePicker,
  Alert
} from '@patternfly/react-core';
const Form__HRInterview: React.FC<any> = (props: any) => {
  const [formApi, setFormApi] = useState<any>();
  const [personalData__name, set__personalData__name] = useState<string>('');
  const [personalData__email, set__personalData__email] = useState<string>('');
  const [address__street, set__address__street] = useState<string>('');
  const [address__num, set__address__num] = useState<number>();
  const [address__cp, set__address__cp] = useState<string>('');
  const [address__city, set__address__city] = useState<string>('');
  const [interview__position, set__interview__position] = useState<string>('');
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
  const [interview__age, set__interview__age] = useState<number>();
  const [interview__salary, set__interview__salary] = useState<number>();
  const [interview__rating, set__interview__rating] = useState<string>('');
  const [interview__hire, set__interview__hire] = useState<boolean>(false);
  const [interview__hiringDate, set__interview__hiringDate] = useState<
    string
  >();
  const [friends, set__friends] = useState<any[]>();
  /* Utility function that fills the form with the data received from the kogito runtime */
  const setFormData = data => {
    if (!data) {
      return;
    }
    set__personalData__name(data?.personalData?.name ?? '');
    set__personalData__email(data?.personalData?.email ?? '');
    set__address__street(data?.address?.street ?? '');
    set__address__num(data?.address?.num);
    set__address__cp(data?.address?.cp ?? '');
    set__address__city(data?.address?.city ?? '');
    set__interview__position(data?.interview?.position ?? '');
    set__interview__otherPositions(data?.interview?.otherPositions ?? []);
    set__interview__skills(data?.interview?.skills ?? []);
    set__interview__age(data?.interview?.age);
    set__interview__salary(data?.interview?.salary);
    set__interview__rating(data?.interview?.rating ?? '');
    set__interview__hire(data?.interview?.hire ?? false);
    set__interview__hiringDate(data?.interview?.hiringDate);
    set__friends(data?.friends);
  };
  /* Utility function to generate the expected form output as a json object */
  const getFormData = useCallback(() => {
    const formData: any = {};
    formData.personalData = {};
    formData.personalData.name = personalData__name;
    formData.personalData.email = personalData__email;
    formData.address = {};
    formData.address.street = address__street;
    formData.address.num = address__num;
    formData.address.cp = address__cp;
    formData.address.city = address__city;
    formData.interview = {};
    formData.interview.position = interview__position;
    formData.interview.otherPositions = interview__otherPositions;
    formData.interview.skills = interview__skills;
    formData.interview.age = interview__age;
    formData.interview.salary = interview__salary;
    formData.interview.rating = interview__rating;
    formData.interview.hire = interview__hire;
    formData.interview.hiringDate = interview__hiringDate;
    formData.friends = friends;
    return formData;
  }, [
    personalData__name,
    personalData__email,
    address__street,
    address__num,
    address__cp,
    address__city,
    interview__position,
    interview__otherPositions,
    interview__skills,
    interview__age,
    interview__salary,
    interview__rating,
    interview__hire,
    interview__hiringDate,
    friends
  ]);
  /* Utility function to validate the form on the 'beforeSubmit' Lifecycle Hook */
  const validateForm = useCallback(() => {}, []);
  /* Utility function to perform actions on the on the 'afterSubmit' Lifecycle Hook */
  const afterSubmit = useCallback(result => {}, []);
  useEffect(() => {
    if (formApi) {
      /*
        Form Lifecycle Hook that will be executed before the form is submitted.
        Throwing an error will stop the form submit. Usually should be used to validate the form.
      */
      formApi.beforeSubmit = () => validateForm();
      /*
        Form Lifecycle Hook that will be executed after the form is submitted.
        It will receive a response object containing the `type` flag indicating if the submit has been successful and `info` with extra information about the submit result.
      */
      formApi.afterSubmit = result => afterSubmit(result);
      /* Generates the expected form output object to be posted */
      formApi.getFormData = () => getFormData();
    }
  }, [getFormData, validateForm, afterSubmit]);
  useEffect(() => {
    /*
      Call to the Kogito console form engine. It will establish the connection with the console embeding the form
      and return an instance of FormAPI that will allow hook custom code into the form lifecycle.
      The `window.Form.openForm` call expects an object with the following entries:
        - onOpen: Callback that will be called after the connection with the console is established. The callback
        will receive the following arguments:
          - data: the data to be bound into the form
          - ctx: info about the context where the form is being displayed. This will contain information such as the form JSON Schema, process/task, user...
    */
    const api = window.Form.openForm({
      onOpen: (data, context) => {
        setFormData(data);
      }
    });
    setFormApi(api);
  }, []);
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
  const parseDate = (date?: string): string => {
    if (!date) {
      return '';
    }
    const dateValue: Date = new Date(Date.parse(date));
    return dateValue.toISOString().slice(0, -14);
  };
  const onDateChange = (
    newValue: string,
    setter: (newValue: string) => void,
    previousValue?: string
  ) => {
    if (newValue) {
      const newDate = new Date(newValue);
      const time = parseTime(previousValue);
      if (time !== '') {
        newDate.setHours(parseInt(time && time.split(':')[0]));
        newDate.setMinutes(parseInt(time && time.split(':')[1].split(' ')[0]));
      }
      setter(newDate.toISOString());
    }
  };
  const parseTime = (date?: string): string => {
    if (!date) {
      return '';
    }
    const dateValue: Date = new Date(Date.parse(date));
    let isAm = true;
    let hours = dateValue.getHours();
    if (hours > 12) {
      hours %= 12;
      isAm = false;
    }
    let minutes = dateValue.getMinutes().toString();
    if (minutes.length == 1) {
      minutes = '0' + minutes;
    }
    return `${hours}:${minutes} ${isAm ? 'AM' : 'PM'}`;
  };
  const onTimeChange = (
    time: string,
    setter: (newValue: string) => void,
    previousValue?: string,
    hours?: number,
    minutes?: number
  ) => {
    if (previousValue) {
      const newDate = new Date(Date.parse(previousValue));
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
      setter(newDate.toISOString());
    }
  };
  return (
    <div className={'pf-c-form'}>
      <Card>
        <CardBody className="pf-c-form">
          <label>
            <b>Personal data</b>
          </label>
          <FormGroup
            fieldId={'uniforms-0000-0002'}
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
              onChange={newValue => set__address__num(Number(newValue))}
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
              onChange={newValue => set__interview__age(Number(newValue))}
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
              onChange={newValue => set__interview__salary(Number(newValue))}
            />
          </FormGroup>
          <FormGroup
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
            label={'Hiring date'}
            isRequired={true}
          >
            <Flex direction={{ default: 'column' }} id={'uniforms-0000-000s'}>
              <FlexItem>
                <InputGroup style={{ background: 'transparent' }}>
                  <DatePicker
                    id={'date-picker-uniforms-0000-000s'}
                    isDisabled={false}
                    name={'interview.hiringDate'}
                    onChange={newDate =>
                      onDateChange(
                        newDate,
                        set__interview__hiringDate,
                        interview__hiringDate
                      )
                    }
                    value={parseDate(interview__hiringDate)}
                  />
                  <TimePicker
                    id={'time-picker-uniforms-0000-000s'}
                    isDisabled={false}
                    name={'interview.hiringDate'}
                    onChange={(time, hours?, minutes?) =>
                      onTimeChange(
                        time,
                        set__interview__hiringDate,
                        interview__hiringDate,
                        hours,
                        minutes
                      )
                    }
                    style={{ width: '120px' }}
                    time={parseTime(interview__hiringDate)}
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
          aren't yet supported, however, you can still write your own component
          into the form and use the already existing states{' '}
          <code>const [ friends, set__friends ]</code>.
        </Alert>
      </FormGroup>
    </div>
  );
};
export default Form__HRInterview;

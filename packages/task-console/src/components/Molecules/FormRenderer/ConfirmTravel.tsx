import { ITaskFormDescription } from './TaskForm';
// import { LongTextField } from 'uniforms-patternfly';

const ConfirmTravelForm: ITaskFormDescription = {
  schema: {
    type: 'object',
    properties: {
      flight: {
        type: 'object',
        properties: {
          flightNumber: {
            type: 'string',
            disabled: false
          },
          seat: {
            type: 'string',
            disabled: false
          },
          gate: {
            type: 'string',
            disabled: false
          },
          departure: {
            type: 'string',
            format: 'date',
            disabled: false
          },
          arrival: {
            type: 'string',
            format: 'date',
            disabled: false
          }
        }
      },
      hotel: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            disabled: false
          },
          address: {
            type: 'object',
            properties: {
              street: {
                type: 'string',
                disabled: false
                /*uniforms: {
                  component: LongTextField
                }*/
              },
              city: {
                type: 'string',
                disabled: false
              },
              zipCode: {
                type: 'string',
                disabled: false
              },
              country: {
                type: 'string',
                disabled: false
              }
            }
          },
          phone: {
            type: 'string',
            disabled: false
          },
          bookingNumber: {
            type: 'string',
            disabled: false
          },
          room: {
            type: 'string',
            disabled: false
          }
        }
      }
    }
  },

  actions: [
    {
      name: 'Confirm',
      reload: true,
      endpoint: 'blabla',
      payload: false
    }
  ]
};

export default ConfirmTravelForm;

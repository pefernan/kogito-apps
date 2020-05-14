import { ITaskFormDescription } from './TaskForm';

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

  model: {
    flight: {
      flightNumber: 'EK256',
      seat: '26E',
      gate: '12'
    },
    hotel: {
      name: 'Sarovar Portico Outer Ring Road',
      address: {
        street: '39/5, Marathahalli Outer Ring Road',
        city: 'Bengaluru',
        zipCode: '560037',
        country: 'India'
      },
      phone: '+91 80672 05000',
      bookingNumber: '1234567890',
      room: '19'
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

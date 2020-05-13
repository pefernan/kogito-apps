import { ITaskFormDescription } from './TaskForm';

const ConfirmTravelForm: ITaskFormDescription = {
  schema: {
    flight: {
      type: 'object',
      properties: {
        flightNumber: {
          type: 'string',
          disabled: true
        },
        seat: {
          type: 'string',
          disabled: true
        },
        gate: {
          type: 'string',
          disabled: true
        },
        departure: {
          type: 'string',
          format: 'date',
          disabled: true
        },
        arrival: {
          type: 'string',
          format: 'date',
          disabled: true
        }
      }
    },
    hotel: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          disabled: true
        },
        address: {
          type: 'object',
          properties: {
            street: {
              type: 'string',
              disabled: true
            },
            city: {
              type: 'string',
              disabled: true
            },
            zipCode: {
              type: 'string',
              disabled: true
            },
            country: {
              type: 'string',
              disabled: true
            }
          }
        },
        phone: {
          type: 'string',
          disabled: true
        },
        bookingNumber: {
          type: 'string',
          disabled: true
        },
        room: {
          type: 'string',
          disabled: true
        }
      }
    }
  },

  model: {
    flight: {
      fightNumber: 'EK256',
      seat: '26E',
      gate: '12',
      departure: '12/05/2020 15:10',
      arrival: '13/05/2020 05:45'
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

// Core
import { combineForms } from 'react-redux-form';

export const formsReducer = combineForms(
    {
        signup: {
            firstName: '',
            lastName:  '',
            email:     '',
            password:  '',
            invite:    '',
        },
    },
    'forms',
);

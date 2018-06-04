// Core
import { combineForms } from 'react-redux-form';

import { token } from '../../config';

export const formsReducer = combineForms(
    {
        signup: {
            firstName: 'Pasha',
            lastName:  'Malakhovskyi',
            email:     'pasha@email.com',
            password:  '12345',
            invite:    token,
        },
        login: {
            email:    'pasha@email.com',
            password: '12345',
            remember: true,
        },
        user: {
            profile: {
                firstName: '',
                lastName:  '',
                avatar:    '',
            },
            password: {
                oldPassword: '',
                newPassword: '',
            },
        },
    },
    'forms',
);

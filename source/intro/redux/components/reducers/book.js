// Instruments
import { CHANGE_PAGE } from '../../../../intro/redux/actions/book/types';

const initialState = {
    title:       'Magic and Enchantment',
    totalPages:  '898',
    currentPage: '1',
};

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return { ...state, currentPage: action.payload};

        default:
            return state;
    }
};

// Instruments
import { types } from "./types";
// debugger;
//
export const profileActions = Object.freeze({
    fillProfile: (profile) => ({
        type:    types.FILL_PROFILE,
        payload: profile,
    }),
    clearProfile: () => ({
        type: types.CLEAR_PROFILE,
    }),
});

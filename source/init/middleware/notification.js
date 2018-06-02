export const notification = () => (next) => (action) => {
    if (action.error) {
        console.log(action.payload);
    }

    return next(action);
};

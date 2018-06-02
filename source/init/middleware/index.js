import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
import { customThunk } from './customThunk';
import { notification } from './notification';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});

const middleware = [customThunk, notification];

const dev = process.env.NODE_ENV === 'development';

if (dev) {
    middleware.push(logger);
}

export { dev, middleware };

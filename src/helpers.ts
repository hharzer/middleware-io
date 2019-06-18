import { NextMiddleware } from './types';

export const assertMiddleware = (middleware: Function) => {
	if (typeof middleware !== 'function') {
		throw new TypeError('Middleware must be composed of functions!');
	}
};

export const assertMiddlewares = (middlewares: Function[]) => (
	middlewares.forEach(assertMiddleware)
);

export const noopNext: NextMiddleware = async () => {};

export const skipMiddleware = <T>(context: T, next: NextMiddleware) => next();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const stopMiddleware = async <T>(context: T, next: NextMiddleware) => {};

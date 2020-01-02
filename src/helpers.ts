import { NextMiddleware, Middleware } from './types';

export const assertMiddleware = (middleware: Function): void => {
	if (typeof middleware !== 'function') {
		throw new TypeError('Middleware must be composed of function!');
	}
};

export const assertMiddlewares = (middlewares: Function[]): void => {
	middlewares.forEach(assertMiddleware);
};

export const wrapMiddlewareNextCall = async <T>(
	context: T,
	middleware: Middleware<T>
): Promise<boolean> => {
	let called = false;

	await middleware(context, async (): Promise<void> => {
		called = true;
	});

	return called;
};

/**
 * Noop for call `next()` in middleware
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noopNext: NextMiddleware = (): Promise<void> => Promise.resolve();

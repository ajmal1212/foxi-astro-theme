globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_BQI0JGNk.mjs';
import './chunks/astro/server_BH6ZPpgk.mjs';
import { s as sequence } from './chunks/index_D5A02k49.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };

export * from './constants.js';
export * from './extensions.js';
export * from './lookup.js';
export * from './match.js';
export * from './normalize.js';
export type * from './types.js';

import { MIME } from './constants.js';

/** Backward-compatible default export. Prefer the named `MIME` export. */
export default MIME;

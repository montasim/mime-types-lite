/**
 * @fileoverview Jest configuration file for testing TypeScript files.
 * This configuration ensures that Jest can handle TypeScript files
 * and execute tests in a Node.js environment.
 *
 * @module jest.config
 * @version 1.0.0
 * @license CC BY-NC-ND 4.0
 *
 * @contact Mohammad Montasim -Al- Mamun Shuvo
 * @created 2025-01-28
 * @contactEmail montasimmamun@gmail.com
 * @contactGithub https://github.com/montasim
 */

/**
 * Jest configuration object for TypeScript support.
 * @type {import('ts-jest').JestConfigWithTsJest}
 */
export default {
    /** The test environment in which the tests will run (Node.js). */
    testEnvironment: 'node',

    /**
     * Transforms TypeScript files using ts-jest to make them compatible with Jest.
     * @property {string} "^.+\\.tsx?$" - A regex pattern that matches `.ts` and `.tsx` files.
     * @property {string} "ts-jest" - The transformer for handling TypeScript files.
     */
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    /**
     * Specifies the file extensions that Jest should consider for testing.
     * Includes TypeScript (.ts, .tsx) and JavaScript (.js) files.
     * @type {string[]}
     */
    moduleFileExtensions: ['ts', 'tsx', 'js'],
};

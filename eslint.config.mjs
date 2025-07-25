import globals from 'globals';
import parser from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';

/**
 * ESLint configuration for a JavaScript/TypeScript project.
 *
 * This configuration ensures adherence to best practices and code consistency in projects
 * that utilize JavaScript and TypeScript. It integrates rulesets for TypeScript, JavaScript,
 * and global configurations to match modern development environments.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
    {
        /**
         * Specifies the files to which this configuration applies.
         * Matches JavaScript, TypeScript, and CommonJS/ESM modules.
         * Example:
         * - .js, .ts, .mjs, .cjs
         */
        files: ['**/*.{ts,js,mjs,cjs}'], // Target JavaScript and TypeScript files

        /**
         * Configures the parser and global variables for the project.
         * Enables parsing of TypeScript files and access to browser/Node.js globals.
         */
        languageOptions: {
            parser, // Use the TypeScript parser for TypeScript files
            globals: {
                ...globals.browser, // Include browser-specific global variables (e.g., window, document)
                ...globals.jest, // Include Jest globals (e.g., describe, it, expect)
                Buffer: 'readonly', // Allows usage of the Node.js `Buffer` object
                process: 'readonly', // Allows access to Node.js `process` object
                module: 'readonly', // Enables `module` object (CommonJS modules)
                require: 'readonly', // Enables `require` function (CommonJS modules)
            },
        },

        /**
         * Defines the plugins used in the project.
         * Includes TypeScript ESLint for enforcing TypeScript rules.
         */
        plugins: {
            '@typescript-eslint': pluginTs,
        },

        /**
         * Custom rules for enforcing coding conventions and preventing errors.
         * Combines recommended rules from JavaScript and TypeScript plugins with project-specific adjustments.
         */
        rules: {
            // Recommended TypeScript rules
            ...pluginTs.configs.recommended.rules,

            // Allow specific console methods for debugging purposes
            'no-console': [
                'warn',
                { allow: ['error', 'warn', 'info', 'table'] },
            ],

            // Enforce single quotes for string literals
            quotes: [
                'error',
                'single',
                { avoidEscape: true, allowTemplateLiterals: true },
            ],

            // Require semicolon termination for all statements
            semi: ['error', 'always'],

            // Prefer arrow functions for callbacks unless `this` context is needed
            'prefer-arrow-callback': [
                'error',
                { allowNamedFunctions: false, allowUnboundThis: true },
            ],

            // Prefer `const` for variables that are not reassigned
            'prefer-const': 'error',

            // Disallow the usage of `var` (use `let` or `const` instead)
            'no-var': 'error',
        },
    },

    {
        /**
         * Defines file and directory patterns to ignore during linting.
         * Excludes unnecessary files like build artifacts, dependency directories, and IDE configurations
         * to improve linting performance and focus only on source files.
         *
         * Examples:
         * - Ignore `node_modules` to avoid linting third-party dependencies.
         * - Ignore `.next/` to skip Next.js build artifacts.
         */
        ignores: [
            '.github/**', // Ignore GitHub-specific configuration files and directories
            '.husky/**', // Ignore Husky configuration and hook scripts
            '.idea/**', // Ignore JetBrains IDE (e.g., WebStorm) project configuration files
            '.next/**', // Ignore Next.js build output directory to avoid unnecessary processing
            '.yarn/**', // Ignore Yarn cache, configuration, and installation-related files
            'node_modules/**', // Ignore third-party dependency files (handled by package manager)
            'build/**', // Ignore build output directory (e.g., production-ready files)
            'dist/**', // Ignore build output directory (e.g., production-ready files)
            'out/**', // Ignore build output directory (e.g., production-ready files)
            'logs/**', // Ignore application log files (e.g., error or debug logs)
            'yarn.lock', // Ignore the Yarn lock file (used for dependency resolution)
        ],
    },
];

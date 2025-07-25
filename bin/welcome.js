#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';

/**
 * Generates ASCII art for "client-parser" using the 'Big' font.
 * The output is configured for full horizontal and vertical layout.
 * @type {string}
 */
const clientParserArt = figlet.textSync('client-parser', {
    font: 'Big',
    horizontalLayout: 'full',
    verticalLayout: 'full',
});

/**
 * The URL for Montasim's GitHub profile.
 * @type {string}
 */
const githubUrl = 'https://github.com/montasim';

/**
 * The display text for the hyperlink.
 * @type {string}
 */
const linkText = 'Montasim';

/**
 * Creates a clickable hyperlink string using ANSI escape codes.
 * This link will navigate to `githubUrl` and display `linkText`.
 * Note: Clickable links may not be supported by all terminal emulators.
 * @type {string}
 */
const clickableLink = `\x1b]8;;${githubUrl}\x07${linkText}\x1b]8;;\x07`;

/**
 * Logs the generated ASCII art and a styled signature with a clickable link to the console.
 * The ASCII art is red, and the signature "by - Montasim" is yellow and bold,
 * with "Montasim" being a clickable link.
 */
console.info(
    chalk.red(
        clientParserArt +
            chalk.yellow.bold(' by - ') +
            chalk.bold(clickableLink)
    )
);

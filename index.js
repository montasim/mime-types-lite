/**
 * @fileoverview Defines the various MIME types used in the application.
 * This module exports an object that contains the different MIME types
 * the application can handle. These MIME types are used to identify the format of data being processed or served.
 *
 * @module constants/mimeTypes
 * @version 1.0.0
 * @license CC BY-NC-ND 4.0
 *
 * @contact Mohammad Montasim-Al-Mamun Shuvo
 * @created 2025-01-28
 * @contactEmail montasimmamun@gmail.com
 * @contactGithub https://github.com/montasim
 */

/**
 * An object representing different MIME types.
 * @enum {string}
 */
const mimeTypesConstants = Object.freeze({
    /** Document MIME Types */

    /**
     * MIME Type for PDF files.
     * Example: The application generates an invoice as a `.pdf` file for download.
     * @type {string}
     */
    PDF: 'application/pdf',

    /**
     * MIME Type for Markdown files.
     * Example: Documentation files are stored and processed as `.md`.
     * @type {string}
     */
    MD: 'text/markdown',

    /**
     * MIME Type for Plain Text files.
     * Example: A log file is served as a `.txt` file.
     * @type {string}
     */
    TXT: 'text/plain',

    /**
     * MIME Type for CSV files.
     * Example: Exported reports are downloaded as `.csv` files.
     * @type {string}
     */
    CSV: 'text/csv',



    /** Image MIME Types */

    /**
     * MIME Type for JPEG images.
     * Example: User profile pictures are uploaded and served as `.jpeg` images.
     * @type {string}
     */
    JPG: 'image/jpeg',

    /**
     * MIME Type for PNG images.
     * Example: A server serves `.png` files for website logos.
     * @type {string}
     */
    PNG: 'image/png',

    /**
     * MIME Type for ICO images.
     * Example: A server provides a `.ico` file as the favicon for a website.
     * @type {string}
     */
    ICO: 'image/x-icon',

    /**
     * MIME Type for GIF images.
     * Example: A messaging app serves `.gif` files for animated stickers.
     * @type {string}
     */
    GIF: 'image/gif',

    /**
     * MIME Type for BMP images.
     * Example: Specialized imaging software processes `.bmp` files.
     * @type {string}
     */
    BMP: 'image/bmp',

    /**
     * MIME Type for TIFF images.
     * Example: High-quality scanned documents are stored as `.tiff` files.
     * @type {string}
     */
    TIFF: 'image/tiff',

    /**
     * MIME Type for SVG images.
     * Example: A website serves `.svg` files for scalable vector icons.
     * @type {string}
     */
    SVG: 'image/svg+xml',



    /** Video MIME Types */

    /**
     * MIME Type for MP4 videos.
     * Example: Video streaming services serve `.mp4` files for playback.
     * @type {string}
     */
    MP4: 'video/mp4',



    /** Audio MIME Types */

    /**
     * MIME Type for MP3 audio files.
     * Example: Music streaming services provide `.mp3` files for playback.
     * @type {string}
     */
    MP3: 'audio/mpeg',

    /**
     * MIME Type for WAV audio files.
     * Example: A sound editing application processes `.wav` files.
     * @type {string}
     */
    WAV: 'audio/wav',



    /** Archive MIME Types */

    /**
     * MIME Type for ZIP archives.
     * Example: A server offers `.zip` archives for software downloads.
     * @type {string}
     */
    ZIP: 'application/zip',

    /**
     * MIME Type for RAR archives.
     * Example: Compressed files are provided in `.rar` format for download.
     * @type {string}
     */
    RAR: 'application/vnd.rar',



    /** Web-related MIME Types */

    /**
     * MIME Type for JSON data.
     * Example: REST APIs send data responses as JSON objects.
     * @type {string}
     */
    JSON: 'application/json',

    /**
     * MIME Type for XML data.
     * Example: SOAP APIs exchange data using `.xml` payloads.
     * @type {string}
     */
    XML: 'application/xml',

    /**
     * MIME Type for JavaScript files.
     * Example: A server delivers a `.js` file requested by a web browser.
     * @type {string}
     */
    JS: 'application/javascript',

    /**
     * MIME Type for CSS files.
     * Example: A server serves `.css` files to style a web page.
     * @type {string}
     */
    CSS: 'text/css',

    /**
     * MIME Type for HTML files.
     * Example: A server sends an `.html` file as a response to a browser request.
     * @type {string}
     */
    HTML: 'text/html',
});

export default mimeTypesConstants;

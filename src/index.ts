/**
 * @fileoverview Defines the various MIME types used in the application.
 * This module exports an object that contains the different MIME types
 * the application can handle. These MIME types are used to identify the format of data being processed or served.
 *
 * @module constants/mimeTypes
 * @version 1.0.0
 * @license CC BY-NC-ND 4.0
 *
 * @contact Mohammad Montasim -Al- Mamun Shuvo
 * @created 2025-01-28
 * @contactEmail montasimmamun@gmail.com
 * @contactGithub https://github.com/montasim
 */

/**
 * An object representing different MIME types.
 * @enum {string}
 */
const mimeTypesLite = Object.freeze({
    /** Document MIME Types */

    /**
     * MIME Type for PDF files.
     * Example: The application generates an invoice as a `.pdf` file for download.
     */
    PDF: 'application/pdf' as const,

    /**
     * MIME Type for Markdown files.
     * Example: Documentation files are stored and processed as `.md`.
     */
    MD: 'text/markdown' as const,

    /**
     * MIME Type for Plain Text files.
     * Example: A log file is served as a `.txt` file.
     */
    TXT: 'text/plain' as const,

    /**
     * MIME Type for CSV files.
     * Example: Exported reports are downloaded as `.csv` files.
     */
    CSV: 'text/csv' as const,

    /** Image MIME Types */

    /**
     * MIME Type for JPEG images.
     * Example: User profile pictures are uploaded and served as `.jpeg` images.
     */
    JPG: 'image/jpeg' as const,

    /**
     * MIME Type for PNG images.
     * Example: A server serves `.png` files for website logos.
     */
    PNG: 'image/png' as const,

    /**
     * MIME Type for ICO images.
     * Example: A server provides a `.ico` file as the favicon for a website.
     */
    ICO: 'image/x-icon' as const,

    /**
     * MIME Type for GIF images.
     * Example: A messaging app serves `.gif` files for animated stickers.
     */
    GIF: 'image/gif' as const,

    /**
     * MIME Type for BMP images.
     * Example: Specialized imaging software processes `.bmp` files.
     */
    BMP: 'image/bmp' as const,

    /**
     * MIME Type for TIFF images.
     * Example: High-quality scanned documents are stored as `.tiff` files.
     */
    TIFF: 'image/tiff' as const,

    /**
     * MIME Type for SVG images.
     * Example: A website serves `.svg` files for scalable vector icons.
     */
    SVG: 'image/svg+xml' as const,

    /** Video MIME Types */

    /**
     * MIME Type for MP4 videos.
     * Example: Video streaming services serve `.mp4` files for playback.
     */
    MP4: 'video/mp4' as const,

    /** Audio MIME Types */

    /**
     * MIME Type for MP3 audio files.
     * Example: Music streaming services provide `.mp3` files for playback.
     */
    MP3: 'audio/mpeg' as const,

    /**
     * MIME Type for WAV audio files.
     * Example: A sound editing application processes `.wav` files.
     */
    WAV: 'audio/wav' as const,

    /** Archive MIME Types */

    /**
     * MIME Type for ZIP archives.
     * Example: A server offers `.zip` archives for software downloads.
     */
    ZIP: 'application/zip' as const,

    /**
     * MIME Type for RAR archives.
     * Example: Compressed files are provided in `.rar` format for download.
     */
    RAR: 'application/vnd.rar' as const,

    /** Web-related MIME Types */

    /**
     * MIME Type for JSON data.
     * Example: REST APIs send data responses as JSON objects.
     */
    JSON: 'application/json' as const,

    /**
     * MIME Type for XML data.
     * Example: SOAP APIs exchange data using `.xml` payloads.
     */
    XML: 'application/xml' as const,

    /**
     * MIME Type for JavaScript files.
     * Example: A server delivers a `.js` file requested by a web browser.
     */
    JS: 'application/javascript' as const,

    /**
     * MIME Type for CSS files.
     * Example: A server serves `.css` files to style a web page.
     */
    CSS: 'text/css' as const,

    /**
     * MIME Type for HTML files.
     * Example: A server sends an `.html` file as a response to a browser request.
     */
    HTML: 'text/html' as const,
});

/**
 * Type definition for available MIME types.
 */
export type MimeType = keyof typeof mimeTypesLite;

export default mimeTypesLite;

/**
 * @fileoverview Defines the various MIME types used in the application.
 * This module exports an object that contains the different MIME types
 * the application can handle. These MIME types are used to identify the format of data being processed or served.
 *
 * @module constants/mimeTypesLite
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
     * MIME Type for ePub files.
     * Example: Digital books are distributed in `.epub` format for eReaders.
     */
    EPUB: 'application/epub+zip' as const,

    /**
     * MIME Type for Latex files.
     * Example: Documents written in LaTeX are saved in `.tex` format.
     */
    TEX: 'application/x-tex' as const,

    /**
     * MIME Type for Microsoft PowerPoint files (`.ppt` files).
     * Example: Presentations are shared in `.ppt` format.
     */
    PPT: 'application/vnd.ms-powerpoint' as const,

    /**
     * MIME Type for Microsoft PowerPoint files in the Office Open XML format (`.pptx` files).
     * Example: Presentations are shared in `.pptx` format.
     */
    PPTX: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' as const,

    /**
     * MIME Type for OpenDocument Text files.
     * Example: Documents created in LibreOffice Writer are saved as `.odt` files.
     */
    ODT: 'application/vnd.oasis.opendocument.text' as const,

    /**
     * MIME Type for OpenDocument Spreadsheet files.
     * Example: Spreadsheets created in LibreOffice Calc are saved as `.ods` files.
     */
    ODS: 'application/vnd.oasis.opendocument.spreadsheet' as const,

    /**
     * MIME Type for Rich Text Format (RTF) files.
     * Example: Word processors can save documents as `.rtf` files for compatibility.
     */
    RTF: 'application/rtf' as const,

    /**
     * MIME Type for Microsoft Word documents (`.doc` files).
     * Example: A server serves `.doc` files for download.
     */
    DOC: 'application/msword' as const,

    /**
     * MIME Type for Microsoft Word documents in the Office Open XML format (`.docx` files).
     * Example: Exported reports are generated as `.docx` files.
     */
    DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' as const,

    /**
     * MIME Type for Microsoft Excel files (`.xls` files).
     * Example: Financial data is provided in `.xls` format.
     */
    XLS: 'application/vnd.ms-excel' as const,

    /**
     * MIME Type for Microsoft Excel spreadsheets in the Office Open XML format (`.xlsx` files).
     * Example: Data analytics tools export `.xlsx` files.
     */
    XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' as const,

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
     * MIME Type for XCF files.
     * Example: Images edited in GIMP are saved in `.xcf` format.
     */
    XCF: 'image/x-xcf' as const,

    /**
     * MIME Type for Photoshop files.
     * Example: Graphics are saved and edited in `.psd` format.
     */
    PSD: 'image/vnd.adobe.photoshop' as const,

    /**
     * MIME Type for JPEG 2000 images.
     * Example: High-quality images saved in `.jp2` format.
     */
    JP2: 'image/jp2' as const,

    /**
     * MIME Type for AVIF images.
     * Example: Modern compressed images saved in `.avif` format.
     */
    AVIF: 'image/avif' as const,

    /**
     * MIME Type for HEIC images.
     * Example: Photos captured by modern smartphones are saved as `.heic` files for better compression.
     */
    HEIC: 'image/heic' as const,

    /**
     * MIME Type for WebP images.
     * Example: Web servers deliver `.webp` images for optimized website performance.
     */
    WEBP: 'image/webp' as const,

    /**
     * MIME Type for JPEG images.
     * Example: User profile pictures are uploaded and served as `.jpeg` images.
     */
    JPG: 'image/jpeg' as const,

    /**
     * MIME Type for JPEG images.
     * Example: User profile pictures are uploaded and served as `.jpeg` images.
     */
    JPEG: 'image/jpeg' as const,

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
     * MIME Type for MKV videos.
     * Example: High-quality video files saved in `.mkv` format.
     */
    MKV: 'video/x-matroska' as const,

    /**
     * MIME Type for FLV videos.
     * Example: Flash video files are distributed in `.flv` format.
     */
    FLV: 'video/x-flv' as const,

    /**
     * MIME Type for WMV videos.
     * Example: Windows Media videos are saved as `.wmv` files.
     */
    WMV: 'video/x-ms-wmv' as const,

    /**
     * MIME Type for QuickTime videos.
     * Example: Apple devices record videos in `.mov` format using QuickTime.
     */
    MOV: 'video/quicktime' as const,

    /**
     * MIME Type for WebM videos.
     * Example: Video sharing platforms provide `.webm` files for high-quality playback with smaller file sizes.
     */
    WEBM: 'video/webm' as const,

    /**
     * MIME Type for AVI videos.
     * Example: Desktop applications render `.avi` files for video editing.
     */
    AVI: 'video/avi' as const,

    /**
     * MIME Type for MPEG videos.
     * Example: Media players support playback of `.mpeg` files.
     */
    MPEG: 'video/mpeg' as const,

    /**
     * MIME Type for MP4 videos.
     * Example: Video streaming services serve `.mp4` files for playback.
     */
    MP4: 'video/mp4' as const,

    /** Audio MIME Types */

    /**
     * MIME Type for AMR audio files.
     * Example: Voice recordings are stored in `.amr` format.
     */
    AMR: 'audio/amr' as const,

    /**
     * MIME Type for MIDI audio files.
     * Example: Musical instrument digital interface data saved as `.midi` files.
     */
    MIDI: 'audio/midi' as const,

    /**
     * MIME Type for FLAC audio files.
     * Example: Music enthusiasts use `.flac` files for lossless audio playback.
     */
    FLAC: 'audio/flac' as const,

    /**
     * MIME Type for OGG audio files.
     * Example: Streaming platforms deliver `.ogg` files for high-quality audio playback.
     */
    OGG: 'audio/ogg' as const,

    /**
     * MIME Type for AAC audio files.
     * Example: Advanced compression audio files are streamed as `.aac`.
     */
    AAC: 'audio/aac' as const,

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
     * MIME Type for TAR archives.
     * Example: Files are compressed in `.tar` format for packaging.
     */
    TAR: 'application/x-tar' as const,

    /**
     * MIME Type for GZ archives.
     * Example: Files are compressed with GZIP and saved as `.gz` files.
     */
    GZ: 'application/gzip' as const,

    /**
     * MIME Type for 7z compressed archives.
     * Example: Compressed files are shared in `.7z` format.
     */
    SEVEN_ZIP: 'application/x-7z-compressed' as const,

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

    /**
     * MIME Type for BZ2 archives.
     * Example: Files are compressed with BZIP2 and saved as `.bz2` files.
     */
    BZ2: 'application/x-bzip2' as const,

    /** Web-related MIME Types */

    /**
     * MIME Type for `.ics` calendar files.
     * Example: Calendar events are shared in `.ics` format for scheduling.
     */
    ICS: 'text/calendar' as const,

    /**
     * MIME Type for `.atom` feed files.
     * Example: Websites syndicate content in `.atom` format for RSS readers.
     */
    ATOM: 'application/atom+xml' as const,

    /**
     * MIME Type for `.rss` feed files.
     * Example: Websites syndicate content in `.rss` format for RSS readers.
     */
    RSS: 'application/rss+xml' as const,

    /**
     * MIME Type for `.wasm` WebAssembly files.
     * Example: Servers deliver `.wasm` files to execute WebAssembly code in browsers.
     */
    WASM: 'application/wasm' as const,

    /**
     * MIME Type for `.csv` with semicolon separator.
     * Example: Data files saved as `.csv` with a semicolon instead of a comma as a separator.
     */
    CSV_SEMICOLON: 'text/csv+semicolon' as const,

    /**
     * MIME Type for YAML files.
     * Example: Configuration files for web applications are stored as `.yaml` or `.yml`.
     */
    YAML: 'application/x-yaml' as const,

    /**
     * MIME Type for GraphQL query payloads.
     * Example: GraphQL APIs handle `.graphql` files for client-server communication.
     */
    GRAPHQL: 'application/graphql' as const,

    /**
     * MIME Type for URL-encoded form data.
     * Example: Web forms send data as URL-encoded strings.
     */
    URL_ENCODED: 'application/x-www-form-urlencoded' as const,

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

    /** Font MIME Types */

    /**
     * MIME Type for Web Open Font Format (WOFF) files.
     * Example: Websites load custom fonts using `.woff` files.
     */
    WOFF: 'font/woff' as const,

    /**
     * MIME Type for Web Open Font Format 2 (WOFF2) files.
     * Example: Modern websites use `.woff2` files for optimized font delivery.
     */
    WOFF2: 'font/woff2' as const,

    /**
     * MIME Type for TrueType font files.
     * Example: Fonts are shared in `.ttf` format for compatibility across systems.
     */
    TTF: 'font/ttf' as const,

    /**
     * MIME Type for OpenType font files.
     * Example: Fonts are shared in `.otf` format for enhanced capabilities.
     */
    OTF: 'font/otf' as const,
});

/**
 * Type definition for available MIME types.
 */
export type MimeType = keyof typeof mimeTypesLite;

module.exports = mimeTypesLite;

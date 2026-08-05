/**
 * Standards-based and commonly used media-type constants.
 *
 * Individual exports allow bundlers to omit constants that are not imported.
 * `MIME` keeps the convenient object API from earlier releases.
 */
export const EPUB = 'application/epub+zip' as const;
export const TEX = 'application/x-tex' as const;
export const PPT = 'application/vnd.ms-powerpoint' as const;
export const PPTX =
    'application/vnd.openxmlformats-officedocument.presentationml.presentation' as const;
export const ODT = 'application/vnd.oasis.opendocument.text' as const;
export const ODS = 'application/vnd.oasis.opendocument.spreadsheet' as const;
export const RTF = 'application/rtf' as const;
export const DOC = 'application/msword' as const;
export const DOCX =
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document' as const;
export const XLS = 'application/vnd.ms-excel' as const;
export const XLSX =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' as const;
export const PDF = 'application/pdf' as const;
export const MD = 'text/markdown' as const;
export const TXT = 'text/plain' as const;
export const CSV = 'text/csv' as const;

export const XCF = 'image/x-xcf' as const;
export const PSD = 'image/vnd.adobe.photoshop' as const;
export const JP2 = 'image/jp2' as const;
export const AVIF = 'image/avif' as const;
export const HEIC = 'image/heic' as const;
export const WEBP = 'image/webp' as const;
export const JPG = 'image/jpeg' as const;
export const JPEG = JPG;
export const PNG = 'image/png' as const;
export const ICO = 'image/vnd.microsoft.icon' as const;
export const GIF = 'image/gif' as const;
export const BMP = 'image/bmp' as const;
export const TIFF = 'image/tiff' as const;
export const SVG = 'image/svg+xml' as const;

export const MKV = 'video/x-matroska' as const;
export const FLV = 'video/x-flv' as const;
export const WMV = 'video/x-ms-wmv' as const;
export const MOV = 'video/quicktime' as const;
export const WEBM = 'video/webm' as const;
export const AVI = 'video/x-msvideo' as const;
export const MPEG = 'video/mpeg' as const;
export const MP4 = 'video/mp4' as const;

export const AMR = 'audio/amr' as const;
export const MIDI = 'audio/midi' as const;
export const FLAC = 'audio/flac' as const;
export const OGG = 'audio/ogg' as const;
export const AAC = 'audio/aac' as const;
export const MP3 = 'audio/mpeg' as const;
export const WAV = 'audio/wav' as const;

export const TAR = 'application/x-tar' as const;
export const GZ = 'application/gzip' as const;
export const SEVEN_ZIP = 'application/x-7z-compressed' as const;
export const ZIP = 'application/zip' as const;
export const RAR = 'application/vnd.rar' as const;
export const BZ2 = 'application/x-bzip2' as const;

export const ICS = 'text/calendar' as const;
export const ATOM = 'application/atom+xml' as const;
export const RSS = 'application/rss+xml' as const;
export const WASM = 'application/wasm' as const;
export const YAML = 'application/yaml' as const;
export const GRAPHQL_RESPONSE_JSON =
    'application/graphql-response+json' as const;
export const URL_ENCODED = 'application/x-www-form-urlencoded' as const;
export const FORM_URLENCODED = URL_ENCODED;
export const MULTIPART_FORM_DATA = 'multipart/form-data' as const;
export const JSON = 'application/json' as const;
export const JSON_API = 'application/vnd.api+json' as const;
export const JSON_PATCH = 'application/json-patch+json' as const;
export const MERGE_PATCH = 'application/merge-patch+json' as const;
export const PROBLEM_JSON = 'application/problem+json' as const;
export const NDJSON = 'application/x-ndjson' as const;
export const XML = 'application/xml' as const;
export const JS = 'text/javascript' as const;
export const CSS = 'text/css' as const;
export const HTML = 'text/html' as const;
export const MANIFEST = 'application/manifest+json' as const;
export const EVENT_STREAM = 'text/event-stream' as const;
export const OCTET_STREAM = 'application/octet-stream' as const;

export const WOFF = 'font/woff' as const;
export const WOFF2 = 'font/woff2' as const;
export const TTF = 'font/ttf' as const;
export const OTF = 'font/otf' as const;

/** Historical aliases retained for interoperability and migration. */
export const LEGACY_MIME = Object.freeze({
    JAVASCRIPT: 'application/javascript',
    YAML: 'application/x-yaml',
    ICON: 'image/x-icon',
    GRAPHQL_QUERY: 'application/graphql',
} as const);

/** @deprecated A delimiter does not create a MIME subtype. Use `CSV`. */
export const CSV_SEMICOLON = CSV;

/**
 * @deprecated Historical GraphQL query-document type. For GraphQL-over-HTTP
 * responses, use `GRAPHQL_RESPONSE_JSON`.
 */
export const GRAPHQL = LEGACY_MIME.GRAPHQL_QUERY;

/**
 * Immutable lookup by familiar file-format or protocol key.
 */
export const MIME = Object.freeze({
    EPUB,
    TEX,
    PPT,
    PPTX,
    ODT,
    ODS,
    RTF,
    DOC,
    DOCX,
    XLS,
    XLSX,
    PDF,
    MD,
    TXT,
    CSV,
    XCF,
    PSD,
    JP2,
    AVIF,
    HEIC,
    WEBP,
    JPG,
    JPEG,
    PNG,
    ICO,
    GIF,
    BMP,
    TIFF,
    SVG,
    MKV,
    FLV,
    WMV,
    MOV,
    WEBM,
    AVI,
    MPEG,
    MP4,
    AMR,
    MIDI,
    FLAC,
    OGG,
    AAC,
    MP3,
    WAV,
    TAR,
    GZ,
    SEVEN_ZIP,
    ZIP,
    RAR,
    BZ2,
    ICS,
    ATOM,
    RSS,
    WASM,
    CSV_SEMICOLON,
    YAML,
    GRAPHQL,
    GRAPHQL_RESPONSE_JSON,
    URL_ENCODED,
    FORM_URLENCODED,
    MULTIPART_FORM_DATA,
    JSON,
    JSON_API,
    JSON_PATCH,
    MERGE_PATCH,
    PROBLEM_JSON,
    NDJSON,
    XML,
    JS,
    CSS,
    HTML,
    MANIFEST,
    EVENT_STREAM,
    OCTET_STREAM,
    WOFF,
    WOFF2,
    TTF,
    OTF,
} as const);

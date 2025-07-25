import mimeTypesLite, { MimeType } from '../src/index';

describe('mimeTypesLite', () => {
    /**
     * Ensures the MIME types module is defined and immutable.
     */
    it('should be defined and frozen', () => {
        expect(mimeTypesLite).toBeDefined();
        expect(Object.isFrozen(mimeTypesLite)).toBe(true); // Ensures the object is immutable
    });

    /**
     * Verifies correct MIME types for document-related keys.
     */
    it('should return correct MIME types for documents', () => {
        expect(mimeTypesLite.PDF).toBe('application/pdf');
        expect(mimeTypesLite.MD).toBe('text/markdown');
        expect(mimeTypesLite.TXT).toBe('text/plain');
        expect(mimeTypesLite.CSV).toBe('text/csv');
        expect(mimeTypesLite.DOC).toBe('application/msword');
        expect(mimeTypesLite.DOCX).toBe(
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        );
        expect(mimeTypesLite.XLS).toBe('application/vnd.ms-excel');
        expect(mimeTypesLite.XLSX).toBe(
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        expect(mimeTypesLite.PPT).toBe('application/vnd.ms-powerpoint');
        expect(mimeTypesLite.PPTX).toBe(
            'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        );
        expect(mimeTypesLite.RTF).toBe('application/rtf');
        expect(mimeTypesLite.EPUB).toBe('application/epub+zip');
        expect(mimeTypesLite.TEX).toBe('application/x-tex');
        expect(mimeTypesLite.ODS).toBe(
            'application/vnd.oasis.opendocument.spreadsheet'
        );
        expect(mimeTypesLite.ODT).toBe(
            'application/vnd.oasis.opendocument.text'
        );
    });

    /**
     * Verifies correct MIME types for image-related keys.
     */
    it('should return correct MIME types for images', () => {
        expect(mimeTypesLite.JPG).toBe('image/jpeg');
        expect(mimeTypesLite.JPEG).toBe('image/jpeg');
        expect(mimeTypesLite.PNG).toBe('image/png');
        expect(mimeTypesLite.ICO).toBe('image/x-icon');
        expect(mimeTypesLite.GIF).toBe('image/gif');
        expect(mimeTypesLite.BMP).toBe('image/bmp');
        expect(mimeTypesLite.TIFF).toBe('image/tiff');
        expect(mimeTypesLite.SVG).toBe('image/svg+xml');
        expect(mimeTypesLite.WEBP).toBe('image/webp');
        expect(mimeTypesLite.HEIC).toBe('image/heic');
        expect(mimeTypesLite.AVIF).toBe('image/avif');
        expect(mimeTypesLite.JP2).toBe('image/jp2');
        expect(mimeTypesLite.PSD).toBe('image/vnd.adobe.photoshop');
        expect(mimeTypesLite.XCF).toBe('image/x-xcf');
    });

    /**
     * Verifies correct MIME types for video-related keys.
     */
    it('should return correct MIME types for videos', () => {
        expect(mimeTypesLite.MP4).toBe('video/mp4');
        expect(mimeTypesLite.WEBM).toBe('video/webm');
        expect(mimeTypesLite.AVI).toBe('video/avi');
        expect(mimeTypesLite.MPEG).toBe('video/mpeg');
        expect(mimeTypesLite.MKV).toBe('video/x-matroska');
        expect(mimeTypesLite.MOV).toBe('video/quicktime');
        expect(mimeTypesLite.FLV).toBe('video/x-flv');
        expect(mimeTypesLite.WMV).toBe('video/x-ms-wmv');
    });

    /**
     * Verifies correct MIME types for audio-related keys.
     */
    it('should return correct MIME types for audio files', () => {
        expect(mimeTypesLite.MP3).toBe('audio/mpeg');
        expect(mimeTypesLite.WAV).toBe('audio/wav');
        expect(mimeTypesLite.AAC).toBe('audio/aac');
        expect(mimeTypesLite.OGG).toBe('audio/ogg');
        expect(mimeTypesLite.FLAC).toBe('audio/flac');
        expect(mimeTypesLite.MIDI).toBe('audio/midi');
        expect(mimeTypesLite.AMR).toBe('audio/amr');
    });

    /**
     * Verifies correct MIME types for archive-related keys.
     */
    it('should return correct MIME types for archives', () => {
        expect(mimeTypesLite.ZIP).toBe('application/zip');
        expect(mimeTypesLite.RAR).toBe('application/vnd.rar');
        expect(mimeTypesLite.TAR).toBe('application/x-tar');
        expect(mimeTypesLite.GZ).toBe('application/gzip');
        expect(mimeTypesLite.BZ2).toBe('application/x-bzip2');
        expect(mimeTypesLite.SEVEN_ZIP).toBe('application/x-7z-compressed');
    });

    /**
     * Verifies correct MIME types for web-related keys.
     */
    it('should return correct MIME types for web-related files', () => {
        expect(mimeTypesLite.JSON).toBe('application/json');
        expect(mimeTypesLite.XML).toBe('application/xml');
        expect(mimeTypesLite.JS).toBe('application/javascript');
        expect(mimeTypesLite.CSS).toBe('text/css');
        expect(mimeTypesLite.HTML).toBe('text/html');
        expect(mimeTypesLite.WASM).toBe('application/wasm');
        expect(mimeTypesLite.YAML).toBe('application/x-yaml');
        expect(mimeTypesLite.GRAPHQL).toBe('application/graphql');
        expect(mimeTypesLite.ICS).toBe('text/calendar');
        expect(mimeTypesLite.ATOM).toBe('application/atom+xml');
        expect(mimeTypesLite.RSS).toBe('application/rss+xml');
    });

    /**
     * Verifies correct MIME types for font-related keys.
     */
    it('should return correct MIME types for fonts', () => {
        expect(mimeTypesLite.WOFF).toBe('font/woff');
        expect(mimeTypesLite.WOFF2).toBe('font/woff2');
        expect(mimeTypesLite.TTF).toBe('font/ttf');
        expect(mimeTypesLite.OTF).toBe('font/otf');
    });

    /**
     * Validates that only valid keys are allowed as MimeType type.
     * Ensures TypeScript type safety for valid and invalid keys.
     */
    it('should allow only valid keys as MimeType type', () => {
        const validMimeType: MimeType = 'PDF';
        expect(mimeTypesLite[validMimeType]).toBe('application/pdf');

        // @ts-expect-error This should throw a TypeScript error during compilation
        const invalidMimeType: MimeType = 'INVALID';
        // Uncomment below to test runtime behavior if needed:
        expect(mimeTypesLite[invalidMimeType]).toBeUndefined();
    });

    /**
     * Creates a snapshot of the entire MIME types object for consistency checks.
     */
    it('should match snapshot for the entire constants object', () => {
        expect(mimeTypesLite).toMatchSnapshot();
    });
});

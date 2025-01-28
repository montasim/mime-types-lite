/**
 * @fileoverview Unit tests for the mimeTypesLite module.
 * These tests ensure that all MIME types are correctly defined, immutable, and return expected values.
 * It also validates the TypeScript types and checks that invalid keys are not allowed.
 *
 * @module tests/mimeTypesConstants.test
 * @version 1.0.0
 * @license CC BY-NC-ND 4.0
 *
 * @contact Mohammad Montasim -Al- Mamun Shuvo
 * @created 2025-01-28
 * @contactEmail montasimmamun@gmail.com
 * @contactGithub https://github.com/montasim
 */

import mimeTypesLite, { MimeType } from '../src/index';

describe('mimeTypesConstants', () => {
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
    });

    /**
     * Verifies correct MIME types for image-related keys.
     */
    it('should return correct MIME types for images', () => {
        expect(mimeTypesLite.JPG).toBe('image/jpeg');
        expect(mimeTypesLite.PNG).toBe('image/png');
        expect(mimeTypesLite.ICO).toBe('image/x-icon');
        expect(mimeTypesLite.GIF).toBe('image/gif');
        expect(mimeTypesLite.BMP).toBe('image/bmp');
        expect(mimeTypesLite.TIFF).toBe('image/tiff');
        expect(mimeTypesLite.SVG).toBe('image/svg+xml');
    });

    /**
     * Verifies correct MIME types for video-related keys.
     */
    it('should return correct MIME types for videos', () => {
        expect(mimeTypesLite.MP4).toBe('video/mp4');
    });

    /**
     * Verifies correct MIME types for audio-related keys.
     */
    it('should return correct MIME types for audio files', () => {
        expect(mimeTypesLite.MP3).toBe('audio/mpeg');
        expect(mimeTypesLite.WAV).toBe('audio/wav');
    });

    /**
     * Verifies correct MIME types for archive-related keys.
     */
    it('should return correct MIME types for archives', () => {
        expect(mimeTypesLite.ZIP).toBe('application/zip');
        expect(mimeTypesLite.RAR).toBe('application/vnd.rar');
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

# mime-types-lite

<!-- repository summary badges start -->
<div>
    <img alt="NPM Version" src="https://badgen.net/npm/v/mime-types-lite?label=version&labelColor=EB008B&color=00B8B5">
    <img alt="NPM Downloads" src="https://badgen.net/npm/dm/mime-types-lite?label=downloads&labelColor=EB008B&color=00B8B5">
    <img alt="NPM Package" src="https://badgen.net/npm/license/mime-types-lite?label=license&labelColor=EB008B&color=00B8B5">
</div>
<!-- repository summary badges end -->

The [mime-types-lite](https://www.npmjs.com/package/mime-types-lite) is a lightweight and comprehensive utility providing standardized MIME types for applications. It simplifies the handling of file format identification by offering predefined constants, ensuring clarity and consistency in file processing and serving.

## Table of Contents

- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Supported MIME Types](#supported-mime-types)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [FAQs](#faqs)

---

## Key Features

1. **Predefined MIME Types:** Provides a comprehensive set of MIME types for easy reference.
2. **TypeScript Support:** Includes strong type definitions for enhanced code safety and developer experience.
3. **Immutable Constants:** Ensures MIME types cannot be modified, preventing unintended changes.
4. **Lightweight & Efficient:** Minimal footprint with high performance.
5. **Easy Integration:** Seamlessly integrates with any Node.js or TypeScript-based project.

---

## Installation

To install the package, run the following command:

```bash
npm install mime-types-lite
```

or

```bash
yarn add mime-types-lite
```

or

```bash
pnpm add mime-types-lite
```

or

```bash
bun add mime-types-lite
```

---

## Usage

### JavaScript CommonJS Example

```javascript
const mimeTypesLite = require('mime-types-lite');

console.log(mimeTypesLite.JSON); // Outputs: application/json
```

### JavaScript ESM Example

```javascript
import mimeTypesLite from 'mime-types-lite';

console.log(mimeTypesLite.JSON); // Outputs: application/json

// TypeScript example:
import mimeTypesLite from 'mime-types-lite';

const fileType = 'JSON';
console.log(mimeTypesLite[fileType]); // Outputs: application/json
```

### TypeScript ESM Example

```typescript
import mimeTypesLite, { MimeType } from 'mime-types-lite';

console.log(mimeTypesLite.JSON); // Outputs: application/json

// TypeScript example:
const fileType: MimeType = 'JSON';
console.log(mimeTypesLite[fileType]); // Outputs: application/json
```

---

## Supported MIME Types

### **Document MIME Types**

- `EPUB`: `application/epub+zip`
- `TEX`: `application/x-tex`
- `PPT`: `application/vnd.ms-powerpoint`
- `PPTX`: `application/vnd.openxmlformats-officedocument.presentationml.presentation`
- `ODT`: `application/vnd.oasis.opendocument.text`
- `ODS`: `application/vnd.oasis.opendocument.spreadsheet`
- `RTF`: `application/rtf`
- `DOC`: `application/msword`
- `DOCX`: `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
- `XLS`: `application/vnd.ms-excel`
- `XLSX`: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- `PDF`: `application/pdf`
- `MD`: `text/markdown`
- `TXT`: `text/plain`
- `CSV`: `text/csv`

### **Image MIME Types**

- `XCF`: `image/x-xcf`
- `PSD`: `image/vnd.adobe.photoshop`
- `JP2`: `image/jp2`
- `AVIF`: `image/avif`
- `HEIC`: `image/heic`
- `WEBP`: `image/webp`
- `JPG`: `image/jpeg`
- `JPEG`: `image/jpeg`
- `PNG`: `image/png`
- `ICO`: `image/x-icon`
- `GIF`: `image/gif`
- `BMP`: `image/bmp`
- `TIFF`: `image/tiff`
- `SVG`: `image/svg+xml`

### **Video MIME Types**

- `MKV`: `video/x-matroska`
- `FLV`: `video/x-flv`
- `WMV`: `video/x-ms-wmv`
- `MOV`: `video/quicktime`
- `WEBM`: `video/webm`
- `AVI`: `video/avi`
- `MPEG`: `video/mpeg`
- `MP4`: `video/mp4`

### **Audio MIME Types**

- `AMR`: `audio/amr`
- `MIDI`: `audio/midi`
- `FLAC`: `audio/flac`
- `OGG`: `audio/ogg`
- `AAC`: `audio/aac`
- `MP3`: `audio/mpeg`
- `WAV`: `audio/wav`

### **Archive MIME Types**

- `TAR`: `application/x-tar`
- `GZ`: `application/gzip`
- `SEVEN_ZIP`: `application/x-7z-compressed`
- `ZIP`: `application/zip`
- `RAR`: `application/vnd.rar`
- `BZ2`: `application/x-bzip2`

### **Web-related MIME Types**

- `ICS`: `text/calendar`
- `ATOM`: `application/atom+xml`
- `RSS`: `application/rss+xml`
- `WASM`: `application/wasm`
- `YAML`: `application/x-yaml`
- `GRAPHQL`: `application/graphql`
- `URL_ENCODED`: `application/x-www-form-urlencoded`
- `JSON`: `application/json`
- `XML`: `application/xml`
- `JS`: `application/javascript`
- `CSS`: `text/css`
- `HTML`: `text/html`

### **Font MIME Types**

- `WOFF`: `font/woff`
- `WOFF2`: `font/woff2`
- `TTF`: `font/ttf`
- `OTF`: `font/otf`

---

## License

[![by-nc-nd/4.0](https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)**.

### You are free to:

- **Share** — Copy and redistribute the material in any medium or format.

### Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial** — You may not use the material for commercial purposes.
- **NoDerivatives** — If you remix, transform, or build upon the material, you may not distribute the modified material.

For more details, please visit the [Creative Commons License Page](https://creativecommons.org/licenses/by-nc-nd/4.0/).

---

## Acknowledgments

Special thanks to the following resources:

1. **MDN Web Docs** - Comprehensive MIME type references.
2. **Node.js Express Documentation** - Guidance on handling MIME types in HTTP responses.
3. **TypeScript Docs** - Best practices for defining and using type-safe constants.

---

## FAQs

### 1. **How do I determine the correct MIME type for my file?**

MIME types are categorized based on their format. Documents, images, videos, audio, and archives each have their respective MIME types. Refer to the [Supported MIME Types](#supported-mime-types) section for details.

### 2. **Can I extend this library with custom MIME types?**

No, the constants are immutable and follow the official MIME type standards. If needed, you can create a wrapper module to include your custom MIME types.

### 3. **How do I uninstall the package?**

You can remove the package by running:

```bash
npm uninstall mime-types-lite
```

or

```bash
yarn remove mime-types-lite
```

or

```bash
pnpm remove mime-types-lite
```

or

```bash
bun remove mime-types-lite
```

---

## Author

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/95298623?v=4" width="100px" alt="Moon">
      <a href="https://github.com/montasim">
        <br>
          Ｍ♢ＮＴΛＳＩＭ
        <br>
      </a>
    </td>
  </tr>
</table>

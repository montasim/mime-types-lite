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

---

## Usage

### 1. Importing the Constants

```javascript
import mimeTypesLite from 'mime-types-lite';

console.log(mimeTypesLite.JSON); // Outputs: application/json
```

### 2. TypeScript Support

```typescript
import mimeTypesLite, { MimeType } from 'mime-types-lite';

const fileType: MimeType = 'JSON';
console.log(mimeTypesLite[fileType]); // Outputs: application/json
```

### 3. Example Usage in an Express.js Application

```javascript
import mimeTypesLite from 'mime-types-lite';
const express = require('express');
const app = express();

app.get('/file', (req, res) => {
    res.setHeader('Content-Type', mimeTypesLite.PDF);
    res.send('This is a PDF response');
});

app.listen(3000, () => console.log('Server running on port 3000'));
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

This project is licensed under the `CC BY-NC-ND 4.0`.

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

---

## Author

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/95298623?v=4" width="100px" alt="Moon">
      <a href="https://github.com/montasim">
        <br>
          Ｍ♢ＮＴΛＳＩＭ
        </br>
      </a>
    </td>
  </tr>
</table>

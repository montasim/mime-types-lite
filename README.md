# mime-types-lite

A collection of commonly used MIME types for applications. This package helps standardize MIME type handling in your project.

---

### Requirements to Use the Package

- [NodeJS](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/) (optional but recommended)

---

### 🚀 Installation

To install the package in your project, run:

```bash
npm install mime-types-lite
```

---

### 🛠️ Usage

1. **Import the Constants:**

    You can import all MIME type constants into your project:

    ```javascript
    import mimeTypesLite from 'mime-types-lite';

    console.log(mimeTypesLite.JSON); // Outputs: application/json
    ```

2. **TypeScript Support:**

    The package includes TypeScript types for strict type checking:

    ```typescript
    import mimeTypesLite, { MimeType } from 'mime-types-lite';

    const pdfMimeType: MimeType = 'PDF';
    console.log(mimeTypesLite[pdfMimeType]); // Outputs: application/pdf
    ```

3. **Example Usage in a Node.js Server:**

    ```javascript
    import mimeTypesLite from 'mime-types-lite';

    const express = require('express');
    const app = express();

    app.get('/file', (req, res) => {
        res.setHeader('Content-Type', mimeTypesLite.JSON);
        res.send({ message: 'Hello, world!' });
    });

    app.listen(3000, () => console.log('Server running on port 3000'));
    ```

---

### 📖 Author

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

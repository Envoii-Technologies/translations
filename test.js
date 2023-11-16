import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Konvertieren Sie import.meta.url in einen Pfad
const __dirname = fileURLToPath(new URL('.', import.meta.url));

async function validateTranslations(filePath) {
  try {
    const translations = await import(filePath);
    if (typeof translations.default !== 'object' || translations.default === null) {
      throw new Error(`Translation file does not export an object: ${filePath}`);
    }
  } catch (e) {
    console.error(`Error in file: ${filePath}\n`, e.message);
    throw e;
  }
}

async function testTranslations() {
  const translationsDir = path.join(__dirname, 'translations');
  const languageDirs = fs.readdirSync(translationsDir);

  for (const dir of languageDirs) {
    const translationsPath = path.join(translationsDir, dir);
    const translationFiles = fs.readdirSync(translationsPath);

    for (const file of translationFiles) {
      if(file.includes("index.js"))
      {
        return false;
      }
      const filePath = path.join(translationsPath, file);
      const fileURL = new URL(`file://${filePath}`);

      await validateTranslations(fileURL.href);
    }
  }
}

testTranslations()
  .then(() => console.log('All translation files are valid! Test passed.'))
  .catch((err) => {
    console.error('Test failed');
    process.exit(1);
  });
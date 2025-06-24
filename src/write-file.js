import { writeFile } from 'fs/promises';

const textToWrite = `
What should I cover next?
Comment your idea below 👇
-------------------------------
¿Qué más te gustaria saber?
¡Deja tu idea en los comentarios 👇!
`

const write = async () => {
  try {
    await writeFile('tmp/output.txt', textToWrite);
    console.log('File written successfully!');
  } catch (err) {
    console.error('Error writing file:', err);
  }
};

write();

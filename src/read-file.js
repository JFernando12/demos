import { readFile } from 'fs/promises';

const read = async () => {
  try {
    const data = await readFile('tmp/example.txt', 'utf8');
    console.log('File contents:\n', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
};

read();

import { createWriteStream } from 'node:fs';
import path from 'node:path';

export async function add(currentDir, fileName) {
  if (!fileName) {
    console.log('Operation failed');
    return;
  }

  const filePath = path.resolve(currentDir, fileName);

  try {
    const stream = createWriteStream(filePath);
    stream.end();
    console.log('Created successully');
  } catch {
    console.log('Operation failed');
  }
}
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { stat } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { createBrotliCompress } from 'node:zlib';

export async function compress(currentDir, source, destination) {
  if (!source || !destination) {
    console.log('Operation failed');
    return;
  }

  const srcPath = path.resolve(currentDir, source);
  const destPath = path.resolve(currentDir, destination);

  try {
    const fileStat = await stat(srcPath);

    if (!fileStat.isFile()) {
      console.log('Operation failed');
      return;
    }

    const readStream = createReadStream(srcPath);
    const writeStream = createWriteStream(destPath);
    const brotli = createBrotliCompress();

    await pipeline(readStream, brotli, writeStream);

    console.log('Compressed successfully!');

  } catch {
    console.log('Operation failed');
  }
}
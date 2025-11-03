import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { stat } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';

export async function brotli(currentDir, source, destination, mode) {
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
    const brotli = (mode === 'compress') ? createBrotliCompress() : createBrotliDecompress();

    await pipeline(readStream, brotli, writeStream);

    console.log(mode === 'compress' ? 'Compressed successfully!' : 'Decompressed successfully!')

  } catch {
    console.log('Operation failed');
  }
}
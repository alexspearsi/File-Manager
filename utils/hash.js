import path from 'node:path';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

export async function hash(currentDir, targetPath) {
  if (!targetPath) {
    console.log('Invalid input');
    return;
  }

  const filePath = path.isAbsolute(targetPath) ? targetPath : path.resolve(currentDir, targetPath);

  try {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath)

    for await (const chunk of stream) {
      hash.update(chunk);
    }

    console.log(hash.digest('hex'));
  } catch {
    console.log('Operation failed');
  }
}
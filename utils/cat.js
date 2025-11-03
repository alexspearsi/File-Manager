import { createReadStream } from 'node:fs';
import path from 'node:path';
import fs from 'node:fs/promises'

export async function cat(currentDir, targetPath) {
  if (!targetPath) {
    console.log('Operation failed');
    return;
  }

  const filePath = path.resolve(currentDir, targetPath);

  try {
    const fileStat = await fs.stat(filePath);

    if (!fileStat.isFile()) {
      console.log('Operation failed');
      return;
    }

    const stream = createReadStream(filePath, { encoding: 'utf-8' });
  
    for await (const chunk of stream) {
      console.log(chunk);
    }
  } catch {
    console.log('Operation failed');
  }
}
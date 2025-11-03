import fs, { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { unlink } from 'node:fs/promises';

export async function cp(currentDir, sourceFile, destPathInput, willSrcDelete) {
  if (!sourceFile || !destPathInput) {
    console.log('Operation failed');
    return;
  }

  const srcPath = path.resolve(currentDir, sourceFile);
  let destPath = path.resolve(currentDir, destPathInput);

  try {
    const destStat = await fs.promises.stat(destPath).catch(() => null);

    if (destStat && destStat.isDirectory()) {
      destPath = path.join(destPath, path.basename(srcPath));
    }

    await pipeline(createReadStream(srcPath), createWriteStream(destPath));

    if (willSrcDelete) {
      await unlink(srcPath);
    }

    console.log(willSrcDelete ? 'Moved successfully' : 'Coppied successfully');

  } catch {
    console.log('Operation failed');
  }
}
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

export async function makeDir(currentDir, folderName) {
  const dirPath = path.resolve(currentDir, folderName);

  try {
    await mkdir(dirPath);
    console.log('Created successfully');
  } catch {
    console.log('Operation failed');
  }
}
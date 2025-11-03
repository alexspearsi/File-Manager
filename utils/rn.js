import { rename } from 'node:fs/promises';
import path from 'node:path';

export async function rn(currentDir, oldFile, newFile) {
  if (!oldFile || !newFile) {
    console.log('Operation failed');
    return;
  }

  const oldPath = path.resolve(currentDir, oldFile);
  const newPath = path.resolve(currentDir, newFile);

  try {
    await rename(oldPath, newPath);
    console.log('Renamed successfully');
  } catch {
    console.log('Operation failed');
  }
}
import { unlink } from 'node:fs/promises';
import path from 'node:path';

export async function rm(currentDir, fileToDelete) {
  const filePath = path.resolve(currentDir, fileToDelete);

  try {
    await unlink(filePath);

    console.log('Deleted successfully');
  } catch {
    console.log('Operation failed');
  }
}
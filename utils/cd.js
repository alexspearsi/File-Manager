import * as fs from 'node:fs/promises';
import path from 'node:path';

export async function cd(currentDir, targetPath) {
  if (!targetPath) {
    console.log('Invalid input');
    
    return currentDir;
  }

  const newPath = path.resolve(currentDir, targetPath);

  try {
    const stat = await fs.stat(newPath);

    if (stat.isDirectory()) {
      return newPath;
    } else {
      console.log('Operation failed');
      
      return currentDir;
    }
  } catch {
    console.log('Operation failed');

    return currentDir;
  }
}
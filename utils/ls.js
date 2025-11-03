import * as fs from 'node:fs/promises'

export async function ls(currentDir) {
  try {
    const items = await fs.readdir(currentDir, { withFileTypes: true });
  
    const directories = items
      .filter(item => item.isDirectory())
      .map(item => ({ name: item.name, type: 'directory' }))
      .sort((a, b) => a.name.localeCompare(b.name));
  
    const files = items
      .filter(item => item.isFile())
      .map(item => ({ name: item.name, type: 'file' }))
      .sort((a, b) => a.name.localeCompare(b.name));
  
    const sortedItems = [...directories, ...files];
  
    console.table(sortedItems);

  } catch {
    console.log('Operation failed');
  }
}
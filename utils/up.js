import path from 'node:path';

export function up(currentDir) {
  const parentDir = path.resolve(currentDir, '..')
  return parentDir;
}
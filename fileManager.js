import { cd } from './utils/index.js';
import * as fs from 'node:fs/promises'

export async function fileManager(input, currentDir) {
  const [command, ...args] = input.split(' ');

  switch(command) {
    case 'cd':
      return await cd(currentDir, args[0]);
    default:
      console.log('No such option');
      return currentDir;
  }
}
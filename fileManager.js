import { cd, ls } from './utils/index.js';

export async function fileManager(input, currentDir) {
  const [command, ...args] = input.split(' ');

  switch(command) {
    case 'cd':
      return await cd(currentDir, args[0]);

    case 'ls':
      await ls(currentDir);
      return currentDir;

    default:
      console.log('No such option');
      return currentDir;
  }
}
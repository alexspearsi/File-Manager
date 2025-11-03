import { cd, ls, up, hash } from './utils/index.js';

export async function fileManager(input, currentDir) {
  const [command, ...args] = input.split(' ');

  switch(command) {
    case 'up':
      return up(currentDir);

    case 'cd':
      return await cd(currentDir, args[0]);

    case 'ls':
      await ls(currentDir);
      return currentDir;

    case 'hash':
      await hash(currentDir, args[0]);
      return currentDir;

    default:
      console.log('No such option');
      return currentDir;
  }
}



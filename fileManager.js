import { cd, ls, up, hash, osInfo, compress } from '#utils';

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

    case 'os':
      await osInfo(args[0]);
      return currentDir;

    case 'compress':
      await compress(currentDir, args[0], args[1]);
      return currentDir;

    default:
      console.log('No such option');
      return currentDir;
  }
}

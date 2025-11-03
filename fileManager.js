import { cd, ls, up, hash, osInfo, brotli } from '#utils';

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
      await brotli(currentDir, args[0], args[1], 'compress');
      return currentDir;

    case 'decompress':
      await brotli(currentDir, args[0], args[1], 'decompress');
      return currentDir;

    default:
      console.log('No such option');
      return currentDir;
  }
}

import { cd, ls, up, hash, osInfo, brotli, cat, add, makeDir, rn, cp, rm } from '#utils';

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

    case 'cat':
      await cat(currentDir, args[0]);
      return currentDir;

    case 'add':
      await add(currentDir, args[0]);
      return currentDir;

    case 'mkdir':
      await makeDir(currentDir, args[0]);
      return currentDir;

    case 'rn':
      await rn(currentDir, args[0], args[1]);
      return currentDir;

    case 'cp':
      await cp(currentDir, args[0], args[1], false);
      return currentDir;
    
    case 'mv':
      await cp(currentDir, args[0], args[1], true);
      return currentDir;

    case 'rm':
      await rm(currentDir, args[0]);
      return currentDir;

    default:
      console.log('No such option');
      return currentDir;
  }
}
const args = process.argv;
const usernameArg = args.find(arg => arg.startsWith('--username='))

const rawUser = usernameArg ? usernameArg.split('=').at(-1).trim() : '';

const user = rawUser.length > 0
  ? rawUser.replace(/^./, c => c.toUpperCase())
  : "Anonymous";

console.log(`Welcome to the File Manager, ${user}`);
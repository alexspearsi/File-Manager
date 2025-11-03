import os from 'node:os';
import readline from 'node:readline'
import { fileManager } from './fileManager.js';

const args = process.argv;
const usernameArg = args.find(arg => arg.startsWith('--username='))

const rawUser = usernameArg ? usernameArg.split('=').at(-1).trim() : '';

const user = rawUser.length > 0
  ? rawUser.replace(/^./, c => c.toUpperCase())
  : "Anonymous";

console.log(`Welcome to the File Manager, ${user}`);

let currentDir = os.homedir();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `You are currently in ${currentDir}\n`
})

rl.setPrompt(`You are currently in ${currentDir}\n`)
rl.prompt();

rl.on('line', async(line) => {
  try {
    currentDir = await fileManager(line.trim(), currentDir);
    console.log(currentDir);
  } catch (err) {
    console.log('Operation failed', err);
  }

})

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${user}, goodbye!`);
  process.exit(0);
})

process.on("SIGINT", () => rl.close())
import os from 'node:os';

export async function osInfo(option) {
  switch(option) {
    case '--EOL':
      console.log(JSON.stringify(os.EOL));
      break;

    case '--cpus':
      const cpus = os.cpus();

      console.log(`Quantity of CPUS: ${cpus.length}`);

      cpus.forEach((cpu, index) => {
        console.log(`№${index + 1}: ${cpu.model}, ${cpu.speed} GHz`);
      });

      return;

    case '--homedir':
      console.log(os.homedir());
      return;

    case '--username':
      console.log(os.userInfo().username);
      return;

    case '--architecture':
      console.log(os.arch());
      return;

    default:
      console.log('No such option');
      return;
  }
}



import { addCommand, lsCommand, rmCommand, updateCommand } from './commands';
import { checkAndGetConfig } from './lib/config-action/check-and-get-config';
import { writeConfig } from './lib/config-action/write-config';
import { log } from './lib/log/log';
import { logMessages } from './lib/log/log-messages';
import { TMainArgs } from './types';

// Если нет глобального конфига, предлагаем создать
//
// если нет комманды, то показываем хэлп и список сохраненных проектов (ls)
// [ help, ls, add (in folder), rm (in folder)]
// после выбора проекта из списка, переходим в него

const main = async (arg: TMainArgs = 'ls') => {
  const conf = await checkAndGetConfig();
  const pwd = process.cwd();

  switch (true) {
    case arg === 'ls':
      await lsCommand(conf);
      break;
    case arg === 'rm':
      await rmCommand(conf, pwd);
      break;
    case arg === 'add':
      await addCommand(conf, pwd);
      break;
    case arg === 'update' || arg === 'up':
      await updateCommand(conf);
      break;
    case arg === 'help':
      log.fullHelp(logMessages.fullHelp[0], logMessages.fullHelp[1]);
      break;
    default:
      return log.help(logMessages.help);
  }

  return writeConfig(conf);
};

export { main };

const isMainProcess = require.main === module;

if (isMainProcess) {
  const [arg] = process.argv.slice(2);

  main(arg as TMainArgs).catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  });
}

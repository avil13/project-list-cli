import { addCommand } from './commands/add';
import { lsCommand } from './commands/ls';
import { rmCommand } from './commands/rm';
import { checkAndGetConfig } from './lib/config-action/check-and-get-config';
import { writeConfig } from './lib/config-action/write-config';
import { TMainArgs } from './types';

// Если нет глобального конфига, предлагаем создать
//
// если нет комманды, то показываем хэлп и список сохраненных проектов (ls)
// [ help, ls, add (in folder), rm (in folder)]
// после выбора проекта из списка, переходим в него

const main = async (arg: TMainArgs = 'ls') => {
  const conf = await checkAndGetConfig();
  const pwd = process.cwd();

  if (arg === 'ls') {
    await lsCommand(conf);
  } else if (arg === 'rm') {
    await rmCommand(conf, pwd);
  } else if (arg === 'add') {
    await addCommand(conf, pwd);
  }

  await writeConfig(conf);
};

export { main };

const isMainProcess = require.main === module;

if (isMainProcess) {
  main()
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

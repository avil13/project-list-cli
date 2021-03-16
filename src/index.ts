// import { Arg } from '@avil13/arg';
import { readConfig } from './lib/config-action/read-config';
import { writeConfig } from './lib/config-action/write-config';
import { getConfigPath } from './lib/config-action/get-config-path';
import { hasConfig } from './lib/config-action/has-config';
import { log } from './lib/log/log';
import { logMessages } from './lib/log/log-messages';
import { getEmptyConfig } from './lib/config-action/get-empty-config';
import { ProjectListConfig } from './types';
import { ask } from './lib/cli-action/ask';

// const arg = new Arg();

// console.log('=>', arg.isEmpty);

// Если нет глобального конфига, предлагаем создать
//
// если нет комманды, то показываем хэлп и список сохраненных проектов (ls)
// [ help, ls, add (in folder), rm (in folder)]
// после выбора проекта из списка, переходим в него

const configPath = getConfigPath();

const checkAndGetConfig = async (): Promise<ProjectListConfig> => {
  const isCreated = await hasConfig(configPath);

  if (!isCreated) {
    await writeConfig(getEmptyConfig(), configPath);
    log.info(logMessages.configCreated(configPath));
  }

  return readConfig(configPath);
};

const run = async () => {
  const conf = await checkAndGetConfig();

  if (conf.list.length === 0) {
    log.warning(logMessages.emptyProjectList);
    log.info(logMessages.addProject);
    return;
  }

  const {item} = await ask(logMessages.chooseProject, conf.list);

  const dir = log.getFilteredPath(item);
  process.stdout.write(dir);
};

run().catch((err) => {
  console.error(err);
});

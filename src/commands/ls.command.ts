import { ask } from '../lib/cli-action/ask';
import { logMessages } from '../lib/log/log-messages';
import { addLastPath } from '../lib/project-action/add-last-path';
import { ProjectListConfig } from '../types';
import { log } from '../lib/log/log';

export const lsCommand = async (conf: ProjectListConfig): Promise<void> => {
  if (conf.list.length === 0) {
    log.warning(logMessages.emptyProjectList);
    log.info(logMessages.addProject);
    return;
  }

  const dir = await ask(logMessages.chooseProject, conf.list);

  if (!dir) {
    log.error(logMessages.emptyProjectDir);
    return;
  }

  addLastPath(conf, dir);
};

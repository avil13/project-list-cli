import { ask } from '../lib/cli-action/ask';
import { log } from '../lib/log/log';
import { logMessages } from '../lib/log/log-messages';
import { updateLastPathAndRating } from '../lib/project-action/updateLastPathAndRating';
import { ProjectListConfig } from '../types';

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

  updateLastPathAndRating(conf, dir);
};

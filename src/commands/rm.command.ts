import { logMessages } from '../lib/log/log-messages';
import { log } from '../lib/log/log';
import { remove } from '../lib/project-action/remove';
import { MessageCode, type ProjectListConfig } from '../types';

export const rmCommand = async (conf: ProjectListConfig, aliasOrPath: string) => {
  const msg = remove(conf, aliasOrPath);

  if (msg.code === MessageCode.NOT_FOUND) {
    log.error(logMessages.errorNotFound, msg.message, msg.description);
  } else if (msg.code === MessageCode.REMOVED) {
    log.info(logMessages.infoProjectRemoved, `alias: ${msg.message}`, `path:  ${msg.description}`);
  }

  return msg;
};

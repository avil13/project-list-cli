import { text } from '@clack/prompts';
import path from 'path';
import { log } from '../lib/log/log';
import { logMessages } from '../lib/log/log-messages';
import { add } from '../lib/project-action/add';
import { MessageCode, ProjectListConfig } from '../types';

export const addCommand = async (conf: ProjectListConfig, pathToDir: string) => {
  const pwd = process.cwd();
  const defaultAlias = path.basename(pwd);

  const alias = await text({
    message: 'Input project alias:',
    // placeholder: defaultAlias,
    defaultValue: defaultAlias,
  });

  const msg = add(conf, {
    alias: alias.toString(),
    path: pathToDir,
  });

  if (msg.code === MessageCode.ALREADY_EXISTS_ALIAS) {
    log.warning(
      logMessages.warnThisAliasAlreadyExists,
      `alias: ${msg.message}`,
      `path:  ${msg.description}`,
    );
  } else if (msg.code === MessageCode.ALREADY_EXISTS_PATH) {
    log.warning(
      logMessages.warnThisPathAlreadyExists,
      `alias: ${msg.message}`,
      `path:  ${msg.description}`,
    );
  } else {
    log.info(logMessages.infoProjectAdded, msg.message, msg.description);
  }
};

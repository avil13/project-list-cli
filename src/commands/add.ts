import inquirer from 'inquirer';
import path from 'path';
import { log } from '../lib/log/log';
import { logMessages } from '../lib/log/log-messages';
import { add } from '../lib/project-action/add';
import { MessageCode, ProjectListConfig } from '../types';

export const addCommand = async (conf: ProjectListConfig, pathToDir: string) => {
  const pwd = process.cwd();
  const defaultAlias = path.basename(pwd);

  const { alias } = await inquirer.prompt({
    type: 'input',
    name: 'alias',
    message: 'Input project alias:',
    default: defaultAlias,
  });

  const msg = add(conf, {
    alias,
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

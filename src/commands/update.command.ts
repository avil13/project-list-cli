import { log } from '../lib/log/log';
import { logMessages } from '../lib/log/log-messages';
import { update } from '../lib/project-action/update';
import { ProjectListConfig } from '../types';

export const updateCommand = async (conf: ProjectListConfig) => {
  const { clearedPaths } = await update(conf);

  if (clearedPaths.length) {
    log.info(
      logMessages.upUpdated,
      '',
      ['', ...clearedPaths].join('\n - '), // Empty value, for indentation
    );
  } else {
    log.info(logMessages.upStillSame);
  }
};

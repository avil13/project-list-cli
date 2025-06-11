import type { ProjectListConfig } from '@/types';
import { log } from '../log/log';
import { logMessages } from '../log/log-messages';
import { getConfigPath } from './get-config-path';
import { getEmptyConfig } from './get-empty-config';
import { hasConfig } from './has-config';
import { readConfig } from './read-config';
import { writeConfig } from './write-config';

const configPath = getConfigPath();

export const checkAndGetConfig = async (): Promise<ProjectListConfig> => {
  const isCreated = await hasConfig(configPath);

  if (!isCreated) {
    await writeConfig(getEmptyConfig(), configPath);
    log.info(logMessages.configCreated(configPath));
  }

  return readConfig(configPath);
};

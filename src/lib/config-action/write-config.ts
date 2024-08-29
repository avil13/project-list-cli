import { writeFile } from 'fs/promises';
import { ProjectListConfig } from '../../types';
import { getConfigPath } from './get-config-path';

export const writeConfig = async (config: ProjectListConfig, pathToConfig?: string) => {
  if (!pathToConfig) {
    // eslint-disable-next-line no-param-reassign
    pathToConfig = getConfigPath();
  }

  const configString = JSON.stringify(config, null, 2);

  await writeFile(pathToConfig, configString);
};

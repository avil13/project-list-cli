import { readFile } from 'fs/promises';
import { ProjectListConfig } from '../../types';
import { getConfigPath } from './get-config-path';

export const readConfig = async (pathToConfig?: string): Promise<ProjectListConfig> => {
  if (!pathToConfig) {
    // eslint-disable-next-line no-param-reassign
    pathToConfig = getConfigPath();
  }

  const confString = await readFile(pathToConfig, 'utf8');
  return JSON.parse(confString);
};

import { readFile } from 'node:fs/promises';
import type { ProjectListConfig } from '../../types';
import { getConfigPath } from './get-config-path';

export const readConfig = async (pathToConfig?: string): Promise<ProjectListConfig> => {
  if (!pathToConfig) {
    // biome-ignore lint/style/noParameterAssign:
    pathToConfig = getConfigPath();
  }

  const confString = await readFile(pathToConfig, 'utf8');
  return JSON.parse(confString);
};

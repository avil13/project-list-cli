import { writeFile } from 'node:fs/promises';
import type { ProjectListConfig } from '../../types';
import { getConfigPath } from './get-config-path';

export const writeConfig = async (config: ProjectListConfig, pathToConfig?: string) => {
  if (!pathToConfig) {
    // eslint-disable-next-line no-param-reassign
    // biome-ignore lint/style/noParameterAssign:
    pathToConfig = getConfigPath();
  }

  const configString = JSON.stringify(config, null, 2);

  await writeFile(pathToConfig, configString);
};

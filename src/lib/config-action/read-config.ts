import fs from 'fs';
import { promisify } from 'util';
import { ProjectListConfig } from '../../types';
import { getConfigPath } from './get-config-path';

const fsReadFilePromises = promisify(fs.readFile);

export const readConfig = async (pathToConfig?: string): Promise<ProjectListConfig> => {
  if (!pathToConfig) {
    // eslint-disable-next-line no-param-reassign
    pathToConfig = getConfigPath();
  }

  const confString = await fsReadFilePromises(pathToConfig, 'utf8');
  return JSON.parse(confString);
};

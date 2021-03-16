import {writeFile} from 'fs';
import { promisify } from 'util';
import { ProjectListConfig } from '../../types';
import { getConfigPath } from './get-config-path';

const fsWriteFilePromises = promisify(writeFile);

export const writeConfig = async (config: ProjectListConfig, pathToConfig?: string) => {
  if (!pathToConfig) {
    // eslint-disable-next-line no-param-reassign
    pathToConfig = getConfigPath();
  }

  const configString = JSON.stringify(config, null, 2);

  await fsWriteFilePromises(pathToConfig, configString);
};

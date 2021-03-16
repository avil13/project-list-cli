import {writeFile} from 'fs';
import { promisify } from 'util';
import { ProjectListConfig } from '../../types';

const fsWriteFilePromises = promisify(writeFile);

export const writeConfig = async (config: ProjectListConfig, pathToConfig: string) => {
  const configString = JSON.stringify(config, null, 2);

  await fsWriteFilePromises(pathToConfig, configString);
};

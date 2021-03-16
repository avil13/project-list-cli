import { ProjectListConfig } from '@/types';
import fsPromises from 'fs/promises';

export const writeConfig = async (config: ProjectListConfig, pathToConfig: string) => {
  const configString = JSON.stringify(config, null, 2);
  await fsPromises.writeFile(pathToConfig, configString);
};

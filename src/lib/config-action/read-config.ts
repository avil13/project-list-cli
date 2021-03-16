import { ProjectListConfig } from '@/types';
import fsPromises from 'fs/promises';

export const readConfig = async (pathToConfig: string): Promise<ProjectListConfig> => {
  const confString = await fsPromises.readFile(pathToConfig, 'utf8');
  return JSON.parse(confString);
};

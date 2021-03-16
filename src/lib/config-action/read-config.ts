import { readFile } from 'fs';
import { promisify } from 'util';
import { ProjectListConfig } from '../../types';

const fsReadFilePromises = promisify(readFile);

export const readConfig = async (pathToConfig: string): Promise<ProjectListConfig> => {
  const confString = await fsReadFilePromises(pathToConfig, 'utf8');
  return JSON.parse(confString);
};

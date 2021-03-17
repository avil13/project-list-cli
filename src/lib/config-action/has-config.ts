import fs from 'fs';
import { promisify } from 'util';
import { getConfigPath } from './get-config-path';

const fsStatPromises = promisify(fs.stat);

export const hasConfig = async (pathToConfig?: string): Promise<boolean> => {
  if (!pathToConfig) {
    // eslint-disable-next-line no-param-reassign
    pathToConfig = getConfigPath();
  }

  const isExists = await fsStatPromises(pathToConfig)
    .then((statItem) => statItem.isFile())
    .catch(() => false);

  return isExists;
};

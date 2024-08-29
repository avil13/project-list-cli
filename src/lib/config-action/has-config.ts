import { stat } from 'fs/promises';
import { getConfigPath } from './get-config-path';

const fsStatPromises = stat;

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

import { stat } from 'node:fs/promises';
import { getConfigPath } from './get-config-path';

const fsStatPromises = stat;

export const hasConfig = async (pathToConfig?: string): Promise<boolean> => {
  if (!pathToConfig) {
    // eslint-disable-next-line no-param-reassign
    // biome-ignore lint/style/noParameterAssign:
    pathToConfig = getConfigPath();
  }

  const isExists = await fsStatPromises(pathToConfig)
    .then((statItem) => statItem.isFile())
    .catch(() => false);

  return isExists;
};

import { stat } from 'fs';
import { promisify } from 'util';

const fsStatPromises = promisify(stat);

export const hasConfig = async (pathToConfig: string): Promise<boolean> => {
  const isExists = await fsStatPromises(pathToConfig)
    .then((statItem) => statItem.isFile())
    .catch(() => false);

  return isExists;
};

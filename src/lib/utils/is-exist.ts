import { access } from 'node:fs/promises';

export const isExist = async (pathToFolder: string): Promise<boolean> => {
  return access(pathToFolder)
    .then(() => true)
    .catch(() => false);
};

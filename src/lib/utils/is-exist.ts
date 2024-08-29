import { access } from 'fs/promises';

export const isExist = async (pathToFolder: string): Promise<boolean> => {
  return access(pathToFolder)
    .then(() => true)
    .catch(() => false);
};

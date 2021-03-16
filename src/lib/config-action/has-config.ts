import fsPromises from 'fs/promises';

export const hasConfig = async (pathToConfig: string): Promise<boolean> => {
  const stat = await fsPromises.stat(pathToConfig);

  return stat.isFile();
};

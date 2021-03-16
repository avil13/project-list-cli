import { CONFIG_FILE_NAME } from '@/types';

export const getConfigPath = (): string => {
  const homeDir = getUserHome();

  return `${homeDir}/${CONFIG_FILE_NAME}`;
};

function getUserHome() {
  return (process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']) || '~/';
}

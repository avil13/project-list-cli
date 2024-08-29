import { CONFIG_FILE_NAME } from '../../types';

export const getConfigPath = (): string => {
  // eslint-disable-next-line no-use-before-define
  const homeDir = getUserHome();

  return `${homeDir}/${CONFIG_FILE_NAME}`;
};

export function getUserHome(): string {
  return process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'] || '~/';
}

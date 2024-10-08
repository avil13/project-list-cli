export interface ProjectListItem {
  alias: string;
  path: string;
}
export interface ProjectListConfig {
  list: ProjectListItem[];
  rating: string[];
  lastProjectPath: string;
}

export enum MessageCode {
  OK,
  ALREADY_EXISTS_ALIAS,
  ALREADY_EXISTS_PATH,
  NOT_FOUND,
  REMOVED,
  WRONG_LAST_PATH,
}

export const CONFIG_FILE_NAME = '.project-list.json';

export type TMainArgs = 'ls' | 'add' | 'rm' | 'up' | 'update' | 'help';

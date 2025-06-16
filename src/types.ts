export interface ProjectListItem {
  alias: string;
  path: string;
  branch?: string;
}
export interface ProjectListConfig {
  list: ProjectListItem[];
  rating: string[];
  lastProjectPath: string;
}

export enum MessageCode {
  OK = 0,
  ALREADY_EXISTS_ALIAS = 1,
  ALREADY_EXISTS_PATH = 2,
  NOT_FOUND = 3,
  REMOVED = 4,
  WRONG_LAST_PATH = 5,
}

export const CONFIG_FILE_NAME = '.project-list.json';

export type TMainArgs = 'ls' | 'add' | 'rm' | 'up' | 'update' | 'help';

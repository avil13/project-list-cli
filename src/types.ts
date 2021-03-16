export interface ProjectListConfig {
  list: ProjectListItem[];
  rating: string[];
}

export interface ProjectListItem {
  alias: string;
  path: string;
}

export enum MessageCode {
  OK,
  ALREADY_EXISTS_ALIAS,
  ALREADY_EXISTS_PATH,
  NOT_FOUND,
  REMOVED,
}

export const CONFIG_FILE_NAME = '.project-list.json';

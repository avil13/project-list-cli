import { remove } from '../lib/project-action/remove';
import { ProjectListConfig } from '../types';

export const rmCommand = async (conf: ProjectListConfig, aliasOrPath: string) => {
  remove(conf, aliasOrPath);
};

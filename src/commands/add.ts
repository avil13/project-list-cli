import inquirer from 'inquirer';
import { add } from '../lib/project-action/add';
import { ProjectListConfig } from '../types';

export const addCommand = async (conf: ProjectListConfig, pathToDir: string) => {
  const { alias } = await inquirer.prompt({
    type: 'input',
    name: 'alias',
    message: 'Input project alias:',
  });

  add(conf, {
    alias,
    path: pathToDir,
  });
};

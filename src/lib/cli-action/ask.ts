import inquirer from 'inquirer';
// @ts-ignore
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import { ProjectListItem } from '../../types';
import { log } from '../log/log';

inquirer.registerPrompt(
  'autocomplete',
  inquirerAutocompletePrompt,
);

export const ask = async (message: string, choices: ProjectListItem[]) => {
  const prompt = await inquirer.prompt({
    // @ts-ignore
    type: 'autocomplete',
    name: 'item',
    message,
    source(_answersSoFar: unknown, input: string = '') {
      const listItems = choices
        // find items
        .filter((item) => item.alias.includes(input) || item.path.includes(input));

      const list = log.mapToProjectList(listItems);

      return Promise.resolve(list);
    },
  });

  return prompt;
};

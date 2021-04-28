import inquirer from 'inquirer';
// @ts-ignore
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import { ProjectListItem } from '../../types';
import { log } from '../log/log';

inquirer.registerPrompt(
  'autocomplete',
  inquirerAutocompletePrompt,
);

function checkItem(item: ProjectListItem, filterString: string): boolean {
  return item.alias.toLowerCase().includes(filterString)
  || item.path.toLowerCase().includes(filterString);
}

export const ask = async (message: string, choices: ProjectListItem[]) => {
  const prompt = await inquirer.prompt({
    // @ts-ignore
    type: 'autocomplete',
    name: 'item',
    message,
    source(_answersSoFar: unknown, input: string = '') {
      const inputString = input.toLowerCase();

      const listItems = choices
        // find items
        .filter((item) => checkItem(item, inputString));

      const list = log.mapToProjectList(listItems);

      return Promise.resolve(list);
    },
  });

  return prompt;
};

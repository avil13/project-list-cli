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

export function checkItem(item: ProjectListItem, filterString: string): boolean {
  const list: string[] = [item.alias, item.path];
  const reg = new RegExp(
    filterString.split('').join('.*'),
    'gi',
  );

  return list.some((str) => reg.test(str));
}

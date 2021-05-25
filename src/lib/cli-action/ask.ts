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
      const listItems = filterChoices(input, choices);

      const list = log.mapToProjectList(listItems);

      return Promise.resolve(list);
    },
  });

  return prompt;
};

export function filterChoices(input: string, list: ProjectListItem[]): ProjectListItem[] {
  const filteredList = list.filter((item) => checkItem(item, input));

  const sortedList = filteredList.sort((a, b) => {
    if (a.alias.includes(input)) {
      return -1;
    }
    if (b.alias.includes(input)) {
      return 1;
    }
    return 0;
  });

  return sortedList;
}

export function checkItem(item: ProjectListItem, filterString: string): boolean {
  const reg = new RegExp(
    filterString.split('').join('.*'),
    'gi',
  );

  return reg.test(item.alias) || item.path.includes(filterString);
}

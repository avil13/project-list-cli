import type { ProjectListItem } from '../../types';

import { select } from '@clack/prompts';

export const ask = async (message: string, choices: ProjectListItem[]): Promise<string | null> => {
  // eslint-disable-next-line no-use-before-define
  const options = toOptions(choices);

  const projectPath = await select({
    message,
    options,
  });

  return (typeof projectPath === 'string' && projectPath) || null;
};

function toOptions(list: ProjectListItem[]) {
  return list.map((item) => {
    return {
      value: item.path,
      label: item.alias,
    };
  });
}

// LEGACY

export function filterChoices(input: string, list: ProjectListItem[]): ProjectListItem[] {
  // eslint-disable-next-line no-use-before-define
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
  const reg = new RegExp(filterString.split('').join('.*'), 'gi');

  return reg.test(item.alias) || item.path.includes(filterString);
}

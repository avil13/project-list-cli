import type { ProjectListItem } from '../../types';

import { search } from '@inquirer/prompts';
import { clc } from '../utils/color';

export const ask = async (message: string, choices: ProjectListItem[]): Promise<string | null> => {
  const promptChoices = toChoices(choices);
  try {
    const projectPath = await search({
      message,
      pageSize: 8,
      source: async (input: string | undefined) => {
        if (!input) return promptChoices;
        const lower = input.toLowerCase();
        return promptChoices.filter(
          (c) => c.alias.toLowerCase().includes(lower) || c.value.toLowerCase().includes(lower),
        );
      },
    });
    return (typeof projectPath === 'string' && projectPath) || null;
  } catch (e) {
    // User cancelled (ctrl+c)
    return null;
  }
};

function toChoices(list: ProjectListItem[]) {
  const maxAliasLength = list.reduce((max, item) => Math.max(max, item.alias.length), 0);

  const toName = (item: ProjectListItem): string => {
    if (!item.branch) {
      return item.alias;
    }
    return item.alias + ' '.repeat(maxAliasLength - item.alias.length + 2) + clc.green(item.branch);
  };

  return list.map((item) => ({
    value: item.path,
    alias: item.alias,
    name: toName(item),
  }));
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

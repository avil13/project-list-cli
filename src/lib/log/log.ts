import { ProjectListItem } from '../../types';

const delimiter = '❘';

const log = {
  info(str: string) {
    console.log(str);
  },

  warning(str: string) {
    console.log(str);
  },

  success(str: string) {
    console.log(str);
  },

  mapToProjectList(items: ProjectListItem[]): string[] {
    return items.map((v) => `${v.alias}  \t ${delimiter}${v.path}`);
  },
  getFilteredPath(str: string): string {
    return str.split(delimiter)[1];
  },
};

export {log};

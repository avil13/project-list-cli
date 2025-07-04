/* eslint-disable no-console */
import chalk from 'chalk';
import type { ProjectListItem } from '../../types';

const delimiter = '|';

const getCenteredWidth = (str: string): string => {
  const len = 80;
  const lenLeft = (len - str.length) / 2 + str.length;
  return str.padStart(lenLeft).padEnd(len);
};

export const log = {
  help(str: string) {
    const text = getCenteredWidth(str);

    console.log(chalk.bgBlueBright.black(text), '\n');
  },

  fullHelp(str: string, str2: string) {
    const text = [chalk.bgBlueBright.black(getCenteredWidth(str)), chalk.bold.blue(str2)]
      .filter(Boolean)
      .join('\n');

    console.log(text);
  },

  info(str: string, str2?: string, str3?: string) {
    const text = [chalk.bold.green(str), str2 && chalk.greenBright(str2), str3 && chalk.green(str3)]
      .filter(Boolean)
      .join('\n');

    console.log(text);
  },

  warning(str: string, str2?: string, str3?: string) {
    const text = [
      chalk.bold.yellow(str),
      str2 && chalk.yellowBright(str2),
      str3 && chalk.yellow(str3),
    ]
      .filter(Boolean)
      .join('\n');

    console.log(text);
  },

  error(str: string, str2?: string, str3?: string) {
    const text = [chalk.bold.red(str), str2 && chalk.redBright(str2), str3 && chalk.red(str3)]
      .filter(Boolean)
      .join('\n');

    console.log(text);
  },

  mapToProjectList(items: ProjectListItem[]): string[] {
    let maxAliasLen = 0;

    items.forEach((item) => {
      if (item.alias.length > maxAliasLen) {
        maxAliasLen = item.alias.length;
      }
    });

    return items.map((v) => `${v.alias.padEnd(maxAliasLen)}  ${delimiter} ${v.path}`);
  },
};

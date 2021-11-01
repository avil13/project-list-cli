/* eslint-disable no-param-reassign */
import { isExist } from '../utils/is-exist';
import { ProjectListConfig } from '../../types';

export const update = async (conf: ProjectListConfig): Promise<{ clearedPaths: string[] }> => {
  const { list } = conf;

  const existsListPromises = list.map((item) => isExist(item.path));

  const existsList = await Promise.all(existsListPromises);

  const clearedPaths: string[] = [];

  const googList = list.filter((item, index) => {
    if (existsList[index]) {
      return true;
    }
    clearedPaths.push(item.path);
    return false;
  });

  conf.list = googList;

  return { clearedPaths };
};

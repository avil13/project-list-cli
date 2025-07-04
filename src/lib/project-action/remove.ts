import { MessageCode, type ProjectListConfig } from '../../types';
import { Message } from './message';

/**
 * Remove item from project list
 *
 */
export const remove = (conf: ProjectListConfig, aliasOrPath: string): Message => {
  const { list, rating } = conf;

  const listIndex = list.findIndex((v) => v.alias === aliasOrPath || v.path === aliasOrPath);

  if (listIndex === -1) {
    return new Message(aliasOrPath, '', MessageCode.NOT_FOUND);
  }

  const ratingIndex = rating.findIndex((alias) => alias === list[listIndex].alias);

  const removedItem = {
    alias: list[listIndex].alias,
    path: list[listIndex].path,
  };

  rating.splice(ratingIndex, 1);

  list.splice(listIndex, 1);

  return new Message(removedItem.alias, removedItem.path, MessageCode.REMOVED);
};

import { MessageCode, ProjectListConfig, ProjectListItem } from '@/types';
import { Message } from './message';

/**
 * Add project item
 *
 */
export const add = (conf: ProjectListConfig, item: ProjectListItem): Message => {
  const { list, rating } = conf;

  const listItem = list.find((v) => v.alias === item.alias);

  if (listItem) {
    return new Message(item.alias, item.path, MessageCode.ALREADY_EXISTS_ALIAS);
  }

  const listItem2 = list.find((v) => v.path === item.path);

  if (listItem2) {
    return new Message(item.alias, item.path, MessageCode.ALREADY_EXISTS_PATH);
  }

  list.push(item);
  rating.push(item.alias);

  return new Message(item.alias, item.path, MessageCode.OK);
};

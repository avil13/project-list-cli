import { MessageCode, ProjectListConfig } from '../../types';
import { getUpdatedRating } from './getUpdatedRating';

import { Message } from './message';

export const addLastPath = (conf: ProjectListConfig, lastProjectPath: string): Message => {
  if (!lastProjectPath) {
    return new Message('wrong "lastProjectPath"', '', MessageCode.WRONG_LAST_PATH);
  }

  // eslint-disable-next-line no-param-reassign
  conf.lastProjectPath = lastProjectPath;

  conf.rating = getUpdatedRating(lastProjectPath, conf);

  return new Message('setted "lastProjectPath"', '', MessageCode.OK);
};

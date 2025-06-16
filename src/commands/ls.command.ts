import { getTransformedListNames } from '@/lib/utils/getTransformedListNames';
import { ask } from '../lib/cli-action/ask';
import { log } from '../lib/log/log';
import { logMessages } from '../lib/log/log-messages';
import { updateLastPathAndRating } from '../lib/project-action/updateLastPathAndRating';
import type { ProjectListConfig } from '../types';

export const lsCommand = async (conf: ProjectListConfig): Promise<void> => {
  if (conf.list.length === 0) {
    log.warning(logMessages.emptyProjectList);
    log.info(logMessages.addProject);
    return;
  }

  // Sort the list based on the rating
  conf.list.sort((a, b) => {
    const ratingA = conf.rating.indexOf(a.alias);
    const ratingB = conf.rating.indexOf(b.alias);

    // If both items are in the rating, sort by their position
    if (ratingA !== -1 && ratingB !== -1) {
      return ratingA - ratingB;
    }

    // If only one item is in the rating, prioritize it
    if (ratingA !== -1) {
      return -1;
    }
    if (ratingB !== -1) {
      return 1;
    }

    // If neither item is in the rating, maintain their original order
    return 0;
  });

  // Adding branch name to dir
  conf.list = await getTransformedListNames(conf.list);

  const dir = await ask(logMessages.chooseProject, conf.list);

  if (!dir) {
    log.error(logMessages.emptyProjectDir);
    return;
  }

  updateLastPathAndRating(conf, dir);
};

import type { ProjectListConfig } from '@/types';

export function getUpdatedRating(projectPath: string, conf: ProjectListConfig): string[] {
  const projectItem = conf.list.find((item) => {
    return item.path === projectPath;
  });

  if (!projectItem) {
    return conf.rating;
  }

  const newList = [...conf.rating];
  newList.unshift(projectItem.alias);

  return [...new Set(newList)];
}

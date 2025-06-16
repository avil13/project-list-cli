import { ProjectListItem } from '@/types';
import { getBranchName } from './getBranchName';

export async function getTransformedListNames(
  items: ProjectListItem[],
): Promise<ProjectListItem[]> {
  const result: ProjectListItem[] = [];
  let i = 0;
  let branch = '';

  for (const item of items) {
    i += 1;
    branch = '';

    if (i <= 3) {
      const branchState = await getBranchName(item.path);
      if (branchState.success) {
        branch = branchState.branchName;
      }
    }

    result.push({
      ...item,
      branch,
    });
  }

  return result;
}

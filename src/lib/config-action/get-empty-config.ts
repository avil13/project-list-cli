import type { ProjectListConfig } from '../../types';

export const getEmptyConfig = (): ProjectListConfig => ({
  list: [],
  rating: [],
  lastProjectPath: '',
});

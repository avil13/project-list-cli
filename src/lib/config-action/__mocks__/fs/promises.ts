import { ProjectListConfig } from '@/types';

const emptyConfig: ProjectListConfig = {
  list: [],
  rating: [],
};

const oneItemConfig: ProjectListConfig = {
  list: [{
    alias: 'item 1',
    path: '/path/to',
  }],
  rating: [
    'item 1',
  ],
};

const mockWriteFile = jest.fn();

const fsPromises = {
  async readFile(pathToConfig: string) {
    if (pathToConfig.includes('empty')) {
      return JSON.stringify(emptyConfig, null, 2);
    }
    return JSON.stringify(oneItemConfig, null, 2);
  },

  async writeFile(pathToConfig: string, configString: string) {
    mockWriteFile(pathToConfig, configString);
  },

  async stat() {
    return {
      isFile: () => true,
    };
  },
};

export {
  mockWriteFile,
};

export default fsPromises;

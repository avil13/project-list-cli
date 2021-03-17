import { ProjectListConfig } from '../../../../types';

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
  readFile(pathToConfig: string, cb: (arg0: string) => void) {
    const data = pathToConfig.includes('empty')
      ? JSON.stringify(emptyConfig, null, 2)
      : JSON.stringify(oneItemConfig, null, 2);
    cb(data);
  },

  writeFile(pathToConfig: string, configString: string) {
    mockWriteFile(pathToConfig, configString);
  },

  stat(_: string, cb: (arg0: { isFile: () => boolean; }) => void) {
    cb({ isFile: () => true });
  },
};

export {
  mockWriteFile,
};

export default fsPromises;

import { ProjectListConfig } from '../../../types';

const emptyConfig: ProjectListConfig = {
  list: [],
  rating: [],
  lastProjectPath: '~',
};

const oneItemConfig: ProjectListConfig = {
  list: [{
    alias: 'item 1',
    path: '/path/to',
  }],
  rating: [
    'item 1',
  ],
  lastProjectPath: '~',
};

const fs = {
  readFile(pathToConfig: string, _opt: string, cb: (e: null, arg0: string) => void) {
    const data = pathToConfig.includes('empty')
      ? JSON.stringify(emptyConfig, null, 2)
      : JSON.stringify(oneItemConfig, null, 2);
    cb(null, data);
  },

  writeFile(pathToConfig: string, configString: string, cb: (arg0: null) => void) {
    cb(null);
  },

  stat(_: string, cb: (e: null, arg0: { isFile: () => boolean; }) => void) {
    cb(null, { isFile: () => true });
  },
};

export default fs;

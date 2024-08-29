import { MessageCode, ProjectListConfig } from '../../../types';
import { remove } from '../remove';

describe('remove', () => {
  let conf: ProjectListConfig = {
    list: [],
    rating: [],
    lastProjectPath: '',
  };

  beforeEach(() => {
    conf = {
      list: [
        {
          alias: 'name 1',
          path: '/path/to/dir1',
        },
        {
          alias: 'name 2',
          path: '/path/to/dir2',
        },
      ],
      rating: [],
      lastProjectPath: '',
    };
  });

  it('remove item by alias', () => {
    const status = remove(conf, 'name 1');
    expect(status.code).toBe(MessageCode.REMOVED);
  });

  it('remove item by path', () => {
    const status = remove(conf, '/path/to/dir2');
    expect(status.code).toBe(MessageCode.REMOVED);
  });

  it('remove wrong name and path', () => {
    const status = remove(conf, 'wrong string');
    expect(status.code).toBe(MessageCode.NOT_FOUND);
  });
});

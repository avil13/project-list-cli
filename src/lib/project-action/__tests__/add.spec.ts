import { MessageCode, ProjectListConfig, ProjectListItem } from '../../../types';
import { add } from '../add';
import { Message } from '../message';

describe('add command', () => {
  let conf: ProjectListConfig = {
    list: [],
    rating: [],
  };

  beforeEach(() => {
    conf = {
      list: [],
      rating: [],
    };
  });

  it('simple add', () => {
    const item: ProjectListItem = {
      alias: 'name 1',
      path: '/path/to/dir',
    };

    const status = add(conf, item);

    expect(status).toBeInstanceOf(Message);
    expect(status.code).toBe(MessageCode.OK);
  });

  it('add same', () => {
    const item: ProjectListItem = {
      alias: 'name 1',
      path: '/path/to/dir',
    };

    conf.list.push(item);

    const status = add(conf, item);

    expect(status).toBeInstanceOf(Message);
    expect(status.code).toBe(MessageCode.ALREADY_EXISTS_ALIAS);
  });

  it('add exists path', () => {
    const item: ProjectListItem = {
      alias: 'name 1',
      path: '/path/to/dir',
    };

    conf.list.push({
      alias: 'name 2',
      path: '/path/to/dir',
    });

    const status = add(conf, item);

    expect(status).toBeInstanceOf(Message);
    expect(status.code).toBe(MessageCode.ALREADY_EXISTS_PATH);
  });
});

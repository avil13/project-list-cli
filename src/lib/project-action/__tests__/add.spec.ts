import { MessageCode, type ProjectListConfig, type ProjectListItem } from '../../../types';
import { beforeEach, describe, expect, it } from 'vitest';

import { Message } from '../message';
import { add } from '../add';

describe('add command', () => {
  let conf: ProjectListConfig = {
    list: [],
    rating: [],
    lastProjectPath: '',
  };

  beforeEach(() => {
    conf = {
      list: [],
      rating: [],
      lastProjectPath: '',
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

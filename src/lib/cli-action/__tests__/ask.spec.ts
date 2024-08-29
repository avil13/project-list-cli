import { describe, expect, it } from 'vitest';
import { ProjectListItem } from '../../../types';
import { checkItem, filterChoices } from '../ask';

describe('ask filter', () => {
  it.each<[[string, string], string, boolean]>([
    [['code-src', '/code/src/project'], 'codesrc', true],
    [['code-src', '/code/src/project'], 'csrc', true],
    [['code-src', '/code/src/project'], 'CSRC', true],
    [['code-src', '/code/src/project'], 'CSrC', true],
    [['code-src', '/code/src/project'], 'csr', true],
    [['code-src', '/code/src/project'], 'src/proje', true],
    [['code-src', '/code/src/project'], 'c/s/p', false],
    [['code-src', '/code/src/project'], 'CSsrC', false],
  ])(
    'checkItem(%s, %s):%s',
    ([alias, path], filterStr, expected) => {
      const res = checkItem({
        alias,
        path,
      }, filterStr);

      expect(res).toBe(expected);
    },
  );

  it.only.each<[string, ProjectListItem[], ProjectListItem[]]>([
    [
      'pro',
      [{ alias: 'parom', path: '' }, { alias: 'project', path: '' }],
      [{ alias: 'project', path: '' }, { alias: 'parom', path: '' }],
    ],
    [
      'pj',
      [{ alias: 'parom', path: '' }, { alias: 'project', path: '' }],
      [{ alias: 'project', path: '' }],
    ],
  ])(
    'filterChoices("%s")',
    (input, list, expected) => {
      const res = filterChoices(input, list);

      expect(res).toEqual(expected);
    },
  );
});

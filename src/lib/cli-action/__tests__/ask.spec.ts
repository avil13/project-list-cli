import { checkItem } from '../ask';

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
});

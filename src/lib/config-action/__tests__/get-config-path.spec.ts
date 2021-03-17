import { CONFIG_FILE_NAME } from '../../../types';
import { getConfigPath } from '../get-config-path';

describe('getConfigPath', () => {
  it('get current path', () => {
    const res = getConfigPath();

    expect(res).toContain(CONFIG_FILE_NAME);
  });
});

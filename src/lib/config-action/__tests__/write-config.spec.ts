import { ProjectListConfig } from '@/types';
import { writeConfig } from '../write-config';
import { mockWriteFile } from '../__mocks__/fs/promises';

describe('writeConfig', () => {
  it('write', async () => {
    const conf: ProjectListConfig = {
      list: [],
      rating: [],
    };

    await writeConfig(conf, '/path/co/conf.json');

    const confStr = JSON.stringify(conf, null, 2);

    expect(mockWriteFile).toHaveBeenLastCalledWith('/path/co/conf.json', confStr);
  });
});

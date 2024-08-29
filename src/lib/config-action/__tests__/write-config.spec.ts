import { ProjectListConfig } from '../../../types';
import { writeConfig } from '../write-config';
import { vi, describe, it, expect } from 'vitest';

vi.mock('fs');

describe('writeConfig', () => {
  it('write', async () => {
    const conf: ProjectListConfig = {
      list: [],
      rating: [],
      lastProjectPath: '',
    };

    const res = await writeConfig(conf, '/path/co/conf.json');

    expect(res).toBe(true);
  });
});

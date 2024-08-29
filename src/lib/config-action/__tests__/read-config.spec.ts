import { ProjectListConfig } from '../../../types';
import { readConfig } from '../read-config';
import { vi, describe, it, expect } from 'vitest';

vi.mock('fs');

describe('readConfig', () => {
  it('read empty', async () => {
    const conf = await readConfig('/some/path/to/empty-config');

    expect(conf).toEqual<ProjectListConfig>({
      list: [],
      rating: [],
      lastProjectPath: '',
    });
  });

  it('read once', async () => {
    const conf = await readConfig('/some/path/to');

    expect(conf).toEqual<ProjectListConfig>(
      {
        list: [{
          alias: 'item 1',
          path: '/path/to',
        }],
        rating: [
          'item 1',
        ],
        lastProjectPath: '',
      },
    );
  });
});

import { ProjectListConfig } from '../../../types';
import { readConfig } from '../read-config';

describe.skip('readConfig', () => {
  it('read empty', async () => {
    const conf = await readConfig('/some/path/to/empty-config');

    expect(conf).toEqual({
      list: [],
      rating: [],
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
      },
    );
  });
});

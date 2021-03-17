import { hasConfig } from '../has-config';

describe.skip('hasConfig', () => {
  it('', async () => {
    const res = await hasConfig('/path/co/conf.json');

    expect(res).toBe(true);
  });
});

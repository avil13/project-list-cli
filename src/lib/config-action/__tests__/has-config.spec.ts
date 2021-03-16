import { hasConfig } from '../has-config';

describe('hasConfig', () => {
  it('', async () => {
    const res = await hasConfig('/path/co/conf.json');

    expect(res).toBe(true);
  });
});

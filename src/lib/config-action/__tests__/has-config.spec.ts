import { hasConfig } from '../has-config';

jest.mock('fs');

describe('hasConfig', () => {
  it('hasConfig simple', async () => {
    const res = await hasConfig('/path/co/conf.json');

    expect(res).toBe(true);
  });
});

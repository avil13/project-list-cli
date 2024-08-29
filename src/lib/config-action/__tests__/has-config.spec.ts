import { hasConfig } from '../has-config';
import { vi, describe, it, expect } from 'vitest';

vi.mock('fs');

describe('hasConfig', () => {
  it('hasConfig simple', async () => {
    const res = await hasConfig('/path/co/conf.json');

    expect(res).toBe(true);
  });
});

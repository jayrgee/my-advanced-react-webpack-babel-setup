import mockAxios from 'axios';

import { fetchConfig } from './fetchConfig';

describe('first test', () => {
  test('hello world', () => {
    expect(true).toBeTruthy();
  });
});

describe('fetchConfig', () => {
  it('fetches data', async () => {
    const mockResponse = {
      data: { foo: 'bar' },
    };
    // setup
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));

    // work
    const config = await fetchConfig();

    // expect
    expect(config.foo).toEqual('bar');
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('config.json');
  });
});

import React from 'react';
import { render } from '@testing-library/react';

describe('first test', () => {
  test('hello world', () => {
    const { getByText } = render(<p>Hello Jest!</p>);
    expect(getByText('Hello Jest!')).toBeTruthy();
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExpandCollapse from './ExpandCollapse';

describe('user interaction', () => {
  test('button expands and collapses the content', () => {
    const children = 'Hello world';
    const { getByText, queryByText } = render(
      <ExpandCollapse excerpt="Information about dogs">
        {children}
      </ExpandCollapse>
    );

    expect(queryByText(children)).not.toBeTruthy();

    fireEvent.click(getByText(/expand/i));

    expect(queryByText(children)).toBeTruthy();

    fireEvent.click(getByText(/collapse/i));

    expect(queryByText(children)).not.toBeTruthy();
  });
});

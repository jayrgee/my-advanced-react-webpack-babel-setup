import React from 'react';
import { render } from '@testing-library/react';
import Pizza from './Pizza';

describe('testing rendering', () => {
  test('contains all ingredients', () => {
    const ingredients = [
      'bacon',
      'tomato',
      'mozzarella',
      'pineapples',
    ];
    const { getByText } = render(<Pizza ingredients={ingredients} />);

    ingredients.forEach(ingredient => {
      expect(getByText(ingredient)).toBeTruthy();
    });
  });
});

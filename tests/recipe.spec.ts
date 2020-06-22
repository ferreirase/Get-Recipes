import Recipe from '../src/models/Recipe';

import {expect} from 'chai';

describe('Recipes Tests', () => {
  it('should return recipe model', () => {
    const result = new Recipe();

    const expected = {
      title: 'guacamole',
      ingredients: ['ovo', 'abacate', 'tomate'],
      link: 'www.google.com/guacamole',
      gif: 'www.google.com/gif/guacamole'
    };

    expect(result).instanceOf(Recipe);
  })
})

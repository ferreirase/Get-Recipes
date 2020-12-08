/* eslint-disable no-return-await */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import Recipe from '../models/Recipe';
import getOneGif from './GetOneGifService';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

interface RecipesData {
  title: string;
  link: string;
  ingredients: [string];
  href: string;
}

async function formatRecipe(recipes: [RecipesData]): Promise<Array<Recipe>> {
  const recipesFormated: Array<Recipe> = [];

  await Promise.all(
    recipes.map(async recipe =>
      recipesFormated.push({
        title: recipe.title.trim(),
        ingredients: recipe.ingredients
          .toString()
          .split(',')
          .map(ingredient => ingredient.trim())
          .sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
          }),
        link: recipe.href,
        gif: await getOneGif(recipe.title),
      }),
    ),
  );

  return recipesFormated;
}

export default formatRecipe;

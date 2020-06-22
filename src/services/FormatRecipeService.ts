/* eslint-disable no-return-await */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import AppError from '../errors/AppError';
import Recipe from '../models/Recipe';
import getRecipes from './GetRecipesService';
import getOneGif from './GetOneGifService';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function formatRecipe(
  keywords: string | undefined,
): Promise<Array<Recipe>> {
  try {
    const recipesFormated: Array<Recipe> = [];

    const recipes = await getRecipes(keywords);
    await Promise.all(
      recipes.map(async recipe =>
        recipesFormated.push(
          new Recipe({
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
      ),
    );

    return recipesFormated;
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
}

export default formatRecipe;

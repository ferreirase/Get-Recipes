/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import AppError from '../errors/AppError';
import Recipe from '../models/Recipe';
import getRecipes from './GetRecipesService';
import getOneGif from './GetOneGifService';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

interface RecipeModel {
  title: string;

  ingredients: Array<string>;

  href: string;

  thumbnail: string;
}

async function formatRecipe(
  keywords: string | undefined,
): Promise<Array<Recipe>> {
  const recipesFormated: Array<Recipe> = [];
  const recipes = await getRecipes(keywords);
  try {
    for (let index = 0; index < recipes.length; index++) {
      recipesFormated.push(
        new Recipe({
          title: recipes[index].title.trim(),
          ingredients: recipes[index].ingredients
            .toString()
            .split(',')
            .map((ingredient: string) => ingredient.trim())
            .sort((a, b) => {
              if (a < b) return -1;
              if (a > b) return 1;
              return 0;
            }),
          link: recipes[index].href,
          gif: await getOneGif(recipes[index].title), // gfisURL[index],
        }),
      );
    }

    return recipesFormated;
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
}

export default formatRecipe;

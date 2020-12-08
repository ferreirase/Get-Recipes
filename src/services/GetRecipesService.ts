/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios';
import AppError from '../errors/AppError';
import formatRecipesService from './FormatRecipeService';

interface Recipe {
  title: string;

  ingredients: Array<string>;

  link: string;

  gif: string;
}

async function getRecipes(
  keywords: string | undefined,
): Promise<Array<Recipe>> {
  try {
    const recipes = await axios
      .get(`${process.env.BASE_URL_RECIPES}?i=${keywords}`)
      .then(res => res.data.results);

    return await formatRecipesService(recipes);
  } catch (error) {
    throw new AppError({ message: error.message, statusCode: 400 });
  }
}

export default getRecipes;

/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios';
import AppError from '../errors/AppError';

interface Recipe {
  title: string;

  ingredients: Array<string>;

  href: string;

  thumbnail: string;
}

async function getOneGif(keywords: string | undefined): Promise<Array<Recipe>> {
  try {
    const recipes = await axios
      .get(`${process.env.BASE_URL_RECIPES}?i=${keywords}`)
      .then(res => res.data.results);

    return recipes;
  } catch (error) {
    throw new AppError({
      message: 'Serviço de busca de Receitas não disponível',
      statusCode: 400,
    });
  }
}

export default getOneGif;

import axios from 'axios';
import AppError from '../errors/AppError';

async function getOneGif(recipe: string): Promise<string> {
  try {
    const gif = await axios
      .get(
        `${process.env.BASE_URL_GIFS}?api_key=${
          process.env.API_KEY_GIPHY
        }&q=${recipe.trim()}`,
      )
      .then(response => response.data.data[0].url);

    return gif;
  } catch (error) {
    throw new AppError({
      message: 'Serviço de busca de Gifs não disponível',
      statusCode: 400,
    });
  }
}

export default getOneGif;

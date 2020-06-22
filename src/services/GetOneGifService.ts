import axios from 'axios';
import AppError from '../errors/AppError';

async function getOneGif(title: string): Promise<string> {
  try {
    const gif = await axios
      .get(
        `${process.env.BASE_URL_GIFS}?api_key=${
          process.env.API_KEY_GIPHY
        }&q=${title.trim()}`,
      )
      .then(response => response.data.data[0].url);

    return gif;
  } catch (error) {
    throw new AppError({ message: error.message, statusCode: 400 });
  }
}

export default getOneGif;

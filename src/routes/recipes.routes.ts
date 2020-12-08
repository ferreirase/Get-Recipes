import { Router } from 'express';
import verifyAmountIngredientsMiddleware from '../middlewares/verifyAmountIngredients';
import getRecipesService from '../services/GetRecipesService';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const recipesRouter = Router();

recipesRouter.use(verifyAmountIngredientsMiddleware);

recipesRouter.get('/', async (request, response) => {
  const keywords = request.query.i?.toString();

  const recipes = await getRecipesService(keywords);

  return response.status(200).json({
    keywords: keywords?.split(','),
    recipes,
  });
});

export default recipesRouter;

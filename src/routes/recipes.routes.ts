import { Router } from 'express';
import FormatRecipeService from '../services/FormatRecipeService';
// import verifyAmountIngredientsMiddleware from '../middlewares/verifyAmountIngredients';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const recipesRouter = Router();

// recipesRouter.use(verifyAmountIngredientsMiddleware);

recipesRouter.get('/', async (request, response) => {
  const keywords = request.query.i?.toString();

  const recipesFormatted = await FormatRecipeService(keywords);

  return response.status(200).json({
    keywords: keywords?.split(','),
    recipes: recipesFormatted,
  });
});

export default recipesRouter;

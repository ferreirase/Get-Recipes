import { Router } from 'express';
// import FormatRecipeService from '../services/FormatRecipeService';
// import verifyAmountIngredientsMiddleware from '../middlewares/verifyAmountIngredients';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const recipesRouter = Router();

// recipesRouter.use(verifyAmountIngredientsMiddleware);

recipesRouter.get('/', async (request, response) => {
  return response.json({ ok: true });
});

export default recipesRouter;

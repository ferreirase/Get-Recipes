import { Router } from 'express';
import recipesRoutes from './recipes.routes';

const routes = Router();

routes.use('/recipes', recipesRoutes);

export default routes;

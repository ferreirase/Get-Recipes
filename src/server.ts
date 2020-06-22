import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'; // pacote para tratamento de erros assíncronos
import routes from './routes/index';
import AppError from './errors/AppError';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(routes);

// fazendo tratativa de erros de todas as rotas com um middleware
app.use(
  (err: Error, _request: Request, response: Response, _: NextFunction) => {
    // se for um erro conhecido na minha aplicação
    if (err instanceof AppError) {
      return response
        .status(err.statusCode)
        .json({ status: 'error', message: err.message });
    }

    // se for um erro desconhecido, retorno uma mensagem genérica
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

const HOST = '0.0.0.0';
const PORT = 3333;

app.listen(PORT, HOST);
console.log(`server is running on http://${HOST}:${PORT}`);

export default app;

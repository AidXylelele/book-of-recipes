import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import 'dotenv/config';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import axios from 'axios';
import AppRouter from './routes';
import connectDB from './config/database';

const cors = require('cors');

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

// Express configuration
app.set('port', process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

router.init();

// TODO: Move that to model GraphQL
const schema = buildSchema(`
  type Query {
    todos: String
  }
`);

// TODO: Create graphQL controller
const rootValue = {
  todos: async () => {
    // TODO: Create http service for that
    const todos = await axios.get('http://localhost:5000/api/todos');
    return todos.data;
  }
};

// TODO: Move that to router init function ONLY AFTER MAIN PART OF APP
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

const port = app.get('port');
// eslint-disable-next-line no-console
const customErrorHandler = (err: any, req: Request, res: Response): void => {
  res.status(err.status || 500).json({
    message: err.message || 'Unknown Error',
    code: err.code
  });
};
app.use(customErrorHandler);

const server = app.listen(port, () => console.log(`Server started on port ${port}`));

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});

export default server;

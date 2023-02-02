import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { TodoSchema } from '../../validators/todo.validators';
import { validateBody } from '../../middlewares/body.middleware';
import { validateId } from '../../middlewares/validateId.middleware';
import { checkExistance } from '../../middlewares/check-existance.middleware';
import { ITodo } from '../../types/todos.type';
import { todoService } from '../../services/todo.service';
import { responseHandler } from '../../middlewares/response.middleware';

const todosRouter: Router = Router();

todosRouter.get('', responseHandler(todoController.getAllTodo.bind(todoController)));
todosRouter.post(
  '',
  validateBody(TodoSchema),
  responseHandler(todoController.createTodo.bind(todoController))
);
todosRouter.use('/:id', validateId, checkExistance<ITodo>(todoService.findById));
todosRouter.get('/:id', responseHandler(todoController.getByIdTodo.bind(todoController)));
todosRouter.put(
  '/:id',
  validateBody(TodoSchema),
  responseHandler(todoController.updateTodo.bind(todoController))
);
todosRouter.delete('/:id', responseHandler(todoController.deleteTodo.bind(todoController)));

export default todosRouter;

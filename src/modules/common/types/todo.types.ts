export interface ITodo {
  userId: string;
  isPrivate: boolean;
  isDone: boolean;
  title: string;
  data: string;
  _id?: string;
}

export interface ICreateTodo {
  isPrivate: boolean;
  isDone: boolean;
  title: string;
  data: string;
}

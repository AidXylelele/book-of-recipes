import * as React from 'react';
import { Button, FormControl, Checkbox, TextField } from '@mui/material';
import { Formik, FormikProps } from 'formik';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../../types/todo.types';
import { todoService } from '../../../../services/todo.service';
import { QUERY_KEYS, ROUTER_KEYS } from '../../../consts/app-keys.const';
import { FormContainer } from './todo-form.styled';
import { todoSchema } from '../../../../validation/todo-validation';

export const TodoForm: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const createTodo = useMutation({
    mutationFn: (todo: ITodo) => todoService.createTodo(todo),
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
    }
  });
  const backHandler = () => {
    navigate(`${ROUTER_KEYS.ROOT}`);
  };

  return (
    <Formik
      initialValues={{
        title: '',
        data: '',
        isDone: false,
        isPrivate: false
      }}
      validateOnChange
      validateOnBlur
      validationSchema={todoSchema}
      onSubmit={(values) => {
        createTodo.mutate(values);
        backHandler();
      }}
    >
      {(formik: FormikProps<ITodo>) => (
        <form style={{ margin: 'auto' }} onSubmit={formik.handleSubmit}>
          <FormContainer onClick={(e) => e.stopPropagation()}>
            <h3>Create Todo</h3>
            <TextField
              required
              id="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
              required
              id="data"
              label="Description"
              value={formik.values.data}
              onChange={formik.handleChange}
              error={formik.touched.data && Boolean(formik.errors.data)}
              helperText={formik.touched.data && formik.errors.data}
            />
            <FormControl>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Private</p>
                <Checkbox
                  id="isPrivate"
                  value={formik.values.isPrivate}
                  onChange={formik.handleChange}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Completed</p>
                <Checkbox id="isDone" value={formik.values.isDone} onChange={formik.handleChange} />
              </div>
            </FormControl>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </FormContainer>
        </form>
      )}
    </Formik>
  );
};

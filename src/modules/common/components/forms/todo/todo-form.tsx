import * as React from 'react';
import { Box, Container, Button, FormControl, Checkbox } from '@mui/material';
import { Formik, FormikProps } from 'formik';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ICreateTodo } from '../../../types/todo.types';
import { todoService } from '../../../../services/todo.service';
import { QUERY_KEYS, ROUTER_KEYS } from '../../../consts/app-keys.const';
import { todoSchema } from '../../../../validation/todo-validation';
import { Input } from '../../input/input.component';
import { useProfile } from '../../../../hooks/profile-hooks.ts';
import { FormStyles } from '../form.styled';


export const TodoForm: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { value } = useProfile();
  const createTodo = useMutation({
    mutationFn: (todo: ICreateTodo) => {
      const newTodo = { ...todo, userId: value._id };
      return todoService.createTodo(newTodo);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
    }
  });
  const backHandler = () => {
    navigate(`${ROUTER_KEYS.TODOS}`);
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
      {(formik: FormikProps<ICreateTodo>) => (
        <form style={FormStyles.form} onSubmit={formik.handleSubmit}>
          <Container maxWidth="sm">
            <Box sx={FormStyles.mainBox}>
              <Box sx={FormStyles.childBox}>
                <h3>Create Todo</h3>
                <Input name="title" label="Title" />
                <Input name="data" label="Description" />
                <FormControl>
                  <div style={FormStyles.div}>
                    <p>Private</p>
                    <Checkbox
                      id="isPrivate"
                      value={formik.values.isPrivate}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div style={FormStyles.div}>
                    <p>Completed</p>
                    <Checkbox
                      id="isDone"
                      value={formik.values.isDone}
                      onChange={formik.handleChange}
                    />
                  </div>
                </FormControl>
                <Button color="primary" variant="contained" fullWidth type="submit">
                  Submit
                </Button>
              </Box>
            </Box>
          </Container>
        </form>
      )}
    </Formik>
  );
};

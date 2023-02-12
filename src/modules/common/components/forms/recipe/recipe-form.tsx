import * as React from 'react';
import { Box, Container, Button } from '@mui/material';
import { Formik, FormikProps } from 'formik';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ICreateRecipe } from '../../../types/recipe.types';
import { recipeService } from '../../../../services/recipe.service';
import { useProfile } from '../../../../hooks/profile-hooks';
import { QUERY_KEYS, ROUTER_KEYS } from '../../../consts/app-keys.const';
import { FormStyles } from '../form.styled';
import { Input } from '../../input/input.component';
import FormDialog from './recipe-dialog';
import { recipeValues } from '../../../consts/initial-values.forms';
import { recipeSchema } from '../../../../validation/recipe-validation';
import { Preloader } from '../../preloader/preloader';

export const RecipeForm: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { value: user } = useProfile();

  const createRecipe = useMutation({
    mutationFn: (product: ICreateRecipe) => {
      const newProduct = { ...product, user_id: user._id };
      return recipeService.createRecipe(newProduct);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.RECIPES]);
    },
  });

  const backHandler = () => {
    navigate(`${ROUTER_KEYS.RECIPES}`);
  };

  if (user) {
    return (
      <Formik
        initialValues={recipeValues}
        validateOnChange
        validateOnBlur
        validationSchema={recipeSchema}
        onSubmit={(values) => {
          createRecipe.mutate(values);
          backHandler();
        }}
      >
        {(formik: FormikProps<ICreateRecipe>) => (
          <form style={FormStyles.form} onSubmit={formik.handleSubmit}>
            <Container maxWidth="sm">
              <Box sx={FormStyles.mainBox}>
                <Box sx={FormStyles.childBox}>
                  <h3>Create Recipe</h3>
                  <Input name="title" label="Title" />
                  <Input name="description" label="Description" />
                  <Input name="photoLink" label="Photo Link" />
                  <Input name="videoLink" label="Video Link" />
                  <FormDialog
                    name="products"
                    products={formik.values.products}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Container>
          </form>
        )}
      </Formik>
    );
  }
  return <Preloader />;
};

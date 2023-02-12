import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, FormikProps } from 'formik';
import { IRecipe } from '../../common/types/recipe.types';
import { FormStyles } from '../../common/components/forms/form.styled';
import { Input } from '../../common/components/input/input.component';
import FormDialog from '../../common/components/forms/recipe/recipe-dialog';
import { useRecipe } from '../../hooks/recipe-hooks';
import { recipeSchema } from '../../validation/recipe-validation';
import { recipeService } from '../../services/recipe.service';
import { useNavigate } from 'react-router-dom';
import { APP_KEYS } from '../../common/consts';

interface IProps {
  id: string;
}

export const RecipeActions: React.FC<IProps> = ({ id }) => {
  const { isLoading, value: recipe } = useRecipe(id);
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleView = () => {
    return navigate(APP_KEYS.ROUTER_KEYS.RECIPES);
  };

  const handleDelete = () => {
    deleteRecipe.mutate(id);
    handleView();
  };

  const handleSubmit = (value: IRecipe) => {
    return updateRecipe.mutate(value);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const deleteRecipe = useMutation({
    mutationFn: (id: string) => recipeService.deleteRecipe(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.RECIPES]);
    },
  });

  const updateRecipe = useMutation({
    mutationFn: (updates: IRecipe) => recipeService.updateRecipe(updates),
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.RECIPES]);
      await queryClient.invalidateQueries([QUERY_KEYS.RECIPE]);
    },
  });

  if (isLoading)
    return (
      <Stack direction="column" gap={2}>
        <Skeleton animation="wave" width={'100%'} />
        <Skeleton animation="wave" width={'100%'} />
      </Stack>
    );

  return (
    <Stack direction="column" gap={2} width={'100%'} padding={2} >
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>Change</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Formik
            initialValues={recipe}
            validateOnChange
            validateOnBlur
            validationSchema={recipeSchema}
            onSubmit={handleSubmit}
          >
            {(formik: FormikProps<IRecipe>) => (
              <form onSubmit={formik.handleSubmit}>
                <Box sx={FormStyles.childBox}>
                  <h3>Edit Recipe</h3>
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
              </form>
            )}
          </Formik>
        </AccordionDetails>
      </Accordion>
      <Button color="primary" onClick={handleDelete}>
        Delete
      </Button>
      <Button color="primary" onClick={handleView}>
        Back
      </Button>
    </Stack>
  );
};

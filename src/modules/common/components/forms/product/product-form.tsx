import * as React from 'react';
import {
  Box,
  Container,
  Button,
  FormControl,
  CircularProgress,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Formik, FormikProps } from 'formik';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEYS, ROUTER_KEYS } from '../../../consts/app-keys.const';
import { Input } from '../../input/input.component';
import { useProfile } from '../../../../hooks/profile-hooks';
import { FormStyles } from '../form.styled';
import { ICreateProduct } from '../../../types/product.types';
import { productService } from '../../../../services/products.service';
import { productValues } from '../../../consts/initial-values.forms';
import { useCategories } from '../../../../hooks/category-hooks';
import { ICategory } from '../../../types/category.types';
import { productSchema } from '../../../../validation/product-validation';

export const ProductForm: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { value: user } = useProfile();
  const { values: categories } = useCategories();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const createProduct = useMutation({
    mutationFn: (product: ICreateProduct) => {
      const newProduct = { ...product, user_id: user._id };
      return productService.createProduct(newProduct);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
    },
  });

  const backHandler = () => {
    navigate(`${ROUTER_KEYS.PRODUCTS}`);
  };

  if (user && categories) {
    return (
      <Formik
        initialValues={productValues}
        validateOnChange
        validateOnBlur
        validationSchema={productSchema}
        onSubmit={(values) => {
          createProduct.mutate(values);
          backHandler();
        }}
      >
        {(formik: FormikProps<ICreateProduct>) => (
          <form style={FormStyles.form} onSubmit={formik.handleSubmit}>
            <Container maxWidth="sm">
              <Box sx={FormStyles.mainBox}>
                <Box sx={FormStyles.childBox}>
                  <h3>Create Todo</h3>
                  <Input name="title" label="Title" />
                  <Input name="amount" label="Amount" />
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category"
                    name="category"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={formik.values.category}
                    label="Category"
                    onChange={formik.handleChange}
                  >
                    {categories.map(({ _id, title }: ICategory) => (
                      <MenuItem value={_id}>{title}</MenuItem>
                    ))}
                  </Select>
                  <FormControl></FormControl>
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
  return <CircularProgress />;
};

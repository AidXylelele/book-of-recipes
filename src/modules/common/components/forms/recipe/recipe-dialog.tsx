import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useField } from 'formik';
import { Container, Input } from '@mui/material';
import { ICreateProduct } from '../../../types/product.types';
import { Stack } from '@mui/system';
import { RecipeProductsList } from './recipe-product-list';
import { CategoriesSelect } from '../../../../categories/categories-select';

interface IProps {
  name: string;
  products: ICreateProduct[];
}

export default function FormDialog({ name, products }: IProps) {
  const [field] = useField(name);

  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const [localProducts, setLocalProducts] = React.useState(products);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const onProductListChange = () => {
    const newProduct = { title, category, amount };
    setLocalProducts([...localProducts, newProduct]);
    field.value.push(newProduct);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
      }}
    >
      <Button variant="outlined" onClick={handleClickOpenDialog}>
        Add product
      </Button>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add product</DialogTitle>
        <DialogContent>
          <DialogContentText>Add product which is needed</DialogContentText>
          <Stack direction="column" spacing={2}>
            <Input
              name="title"
              onChange={(event) => setTitle(event.target.value)}
            ></Input>
            <Input
              name="amount"
              onChange={(event) => setAmount(Number(event.target.value))}
            ></Input>
            <CategoriesSelect value={category} handler={setCategory} />
          </Stack>
          <RecipeProductsList
            products={localProducts}
            handler={setLocalProducts}
          />
        </DialogContent>
        <DialogActions>
          <Stack direction="row" spacing={2}>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
              onClick={() => onProductListChange()}
              fullWidth
              variant="contained"
            >
              Add
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useField } from "formik";
import { Input, InputLabel, MenuItem, Select } from "@mui/material";
import { useCategories } from "../../hooks/category-hooks";
import { Skeleton } from "antd";
import { ICategory } from "../../common/types/category.types";
import { ICreateProduct } from "../../common/types/product.types";
import { Stack } from "@mui/system";
import { RecipeProductsList } from "./recipe-product-list";

interface IProps {
  name: string;
  products: ICreateProduct[];
}

export default function FormDialog({ name, products }: IProps) {
  const { values: categories } = useCategories();
  const [field] = useField(name);
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [localProducts, setLocalProducts] = React.useState(products);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  const handleOpenSelect = () => {
    setOpenSelect(true);
  };

  const onProductListChange = () => {
    const newProduct = { title, category, amount };
    setLocalProducts([...localProducts, newProduct]);
    field.value.push(newProduct);
  };

  if (categories) {
    return (
      <div>
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
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                open={openSelect}
                onClose={handleCloseSelect}
                onOpen={handleOpenSelect}
                value={category}
                label="Category"
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map(({ _id, title }: ICategory) => (
                  <MenuItem value={_id}>{title}</MenuItem>
                ))}
              </Select>
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
      </div>
    );
  }
  return <Skeleton />;
}

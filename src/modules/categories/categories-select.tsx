import {
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { ICategory } from '../common/types/category.types';
import { useCategories } from '../hooks/category-hooks';

interface IProps {
  value: string;
  handler: (args: any) => void;
}

export const CategoriesSelect: React.FC<IProps> = ({ value, handler }) => {
  const { values: categories } = useCategories();

  const [openSelect, setOpenSelect] = React.useState(false);

  const changeHandler = (event: SelectChangeEvent) => {
    const { value } = event.target;
    handler(value);
  };

  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  const handleOpenSelect = () => {
    setOpenSelect(true);
  };

  return (
    <Container>
      {categories ? (
        <>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            name="category"
            open={openSelect}
            onClose={handleCloseSelect}
            onOpen={handleOpenSelect}
            value={value}
            label="Category"
            onChange={changeHandler}
          >
            {categories.map(({ _id, title }: ICategory) => (
              <MenuItem value={_id}>{title}</MenuItem>
            ))}
          </Select>
        </>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

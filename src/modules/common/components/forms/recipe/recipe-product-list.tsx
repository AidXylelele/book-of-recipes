import React, { useState } from 'react';
import { ICreateProduct } from '../../../types/product.types';
import { Chip } from '@mui/material';
import { Box } from '@mui/system';

interface IProps {
  products: ICreateProduct[];
  handler: (arg: ICreateProduct[]) => void;
}

export const RecipeProductsList: React.FC<IProps> = ({ products, handler }) => {
  const [localState, setLocalState] = useState(products);

  const handleDelete = (deleted: ICreateProduct) => {
    const newProducts = localState.filter(
      (item: ICreateProduct) => item !== deleted
    );
    setLocalState(newProducts);
    handler(newProducts);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        border: 'darkgray',
        borderRadius: 2,
      }}
    >
      {products.map((item: ICreateProduct, idx: number) => (
        <Chip
          key={idx}
          label={item.title}
          onDelete={() => handleDelete(item)}
        />
      ))}
    </Box>
  );
};

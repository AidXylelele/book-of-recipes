import React from 'react';
import {
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Container,
  Skeleton,
} from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { Stack } from '@mui/system';
import { useProduct } from '../../hooks/product-hooks';
import { productService } from '../../services/products.service';
import { IProduct } from '../../common/types/product.types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProductActionsStyles } from './product-actions.styled';

interface IProps {
  id: string;
  amount: number;
}

export const ProductActions: React.FC<IProps> = ({ id, amount }) => {
  const { value, isLoading } = useProduct(id);
  const queryClient = useQueryClient();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [oldAmount, setNewAmount] = React.useState<number>(amount);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setNewAmount(newValue);
  };

  const deleteProduct = useMutation({
    mutationFn: (id: string) => productService.deleteProduct(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
    },
  });

  const updateProduct = useMutation({
    mutationFn: (updates: IProduct) => productService.updateProduct(updates),
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
      await queryClient.invalidateQueries([QUERY_KEYS.PRODUCT]);
    },
  });

  if (isLoading)
    return (
      <Stack sx={ProductActionsStyles.stack}>
        <Skeleton animation="wave" width={'100%'} />
        <Skeleton animation="wave" width={'100%'} />
      </Stack>
    );

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 'fit-content',
        gap: 2,
      }}
    >
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>Change amount</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack sx={ProductActionsStyles.stack}>
            <TextField
              label="Amount of product"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
              }}
              onChange={handleInputChange}
            />
            <Button
              color="primary"
              onClick={() => {
                value.amount = oldAmount;
                updateProduct.mutate(value);
              }}
            >
              Submit
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Button
        color="primary"
        onClick={() => {
          deleteProduct.mutate(id);
        }}
      >
        Delete
      </Button>
    </Container>
  );
};

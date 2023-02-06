import React from "react";
import {
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  TextField,
  InputAdornment,
  Container,
} from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../common/consts/app-keys.const";
import { Stack } from "@mui/system";
import { useProduct } from "../../hooks/product-hooks";
import { productService } from "../../services/products.service";
import { IProduct } from "../../common/types/product.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
  id: string;
  amount: number;
}

export const ProductActions: React.FC<IProps> = ({ id, amount }) => {
  const { value } = useProduct(id);
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

  if (id && value) {
    return (
      <Container sx={{minWidth: 'fit-content'}}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>
              Change amount
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2} direction="column" justifyContent="center">
              <Typography variant="body2">{oldAmount}</Typography>
              <TextField
                label="Aomount of product"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end' >g</InputAdornment>
                  ),
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
  }
  return <CircularProgress />;
};

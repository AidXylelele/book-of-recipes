import * as React from "react";
import { LinearProgress } from "@mui/material";
import { Header } from "../common/components/header/header";
import FilterButtons from "./filters/filters.component";
import { RadioChangeEvent } from "antd";
import { IProduct } from "../common/types/product.types";
import ProductItem from "./element/product-element";
import { useProducts } from "../hooks/product-hooks";
import { Container, ProductsListStyled } from "./products-list.styled";
import { Box } from "@mui/system";

export const ProductsList = () => {
  const [category, setCategory] = React.useState<string>("");
  const [search, setSearch] = React.useState<string>("");
  const { isLoading, values } = useProducts(category, search);

  const filterHandler = ({ target: { value } }: RadioChangeEvent) => {
    setCategory(value);
  };

  const searchHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  
  if (isLoading) {
    return <LinearProgress />;
  }
  return (
    <Container>
      <Header />
      <FilterButtons
        value={category}
        changeHandler={filterHandler}
        search={search}
        onChange={searchHandler}
      />
      <Box sx={ProductsListStyled.box}>
        {values.map((item: IProduct) => (
          <ProductItem key={item._id!} {...item} />
        ))}
      </Box>
    </Container>
  );
};

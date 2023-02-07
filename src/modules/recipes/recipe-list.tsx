import React, { useState } from "react";
import { Box, LinearProgress } from "@mui/material";
import { Container } from "./recipe-list.styled";
import { Header } from "../common/components/header/header";
import { RadioChangeEvent } from "antd";
import FilterButtons from "./filters/filters.component";
import { ProductsListStyled } from "../products/products-list.styled";
import { IRecipe } from "../common/types/recipe.types";
import { useRecipes } from "../hooks/recipe-hooks";
import RecipeItem from "./element/recipe-element";

const RecipeList: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<boolean>(true);
  const { isLoading, values } = useRecipes(category, search, status);

  const categoryHandler = ({ target: { value } }: RadioChangeEvent) => {
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
        changeHandler={categoryHandler}
        search={search}
        onChange={searchHandler}
      />
      <Box sx={ProductsListStyled.box}>
        {values.map(({ _id }: IRecipe) => (
          <RecipeItem key={_id} id={_id!} />
        ))}
      </Box>
    </Container>
  );
};

export default RecipeList;

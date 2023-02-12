import * as React from 'react';
import { Header } from '../common/components/header/header';
import FilterButtons from '../common/components/filters/filters.component';
import { RadioChangeEvent } from 'antd';
import { IProduct } from '../common/types/product.types';
import ProductItem from './element/product-element';
import { useProducts } from '../hooks/product-hooks';
import { Container, ProductsListStyled } from './products-list.styled';
import { Box } from '@mui/system';
import { todoOptions } from '../common/components/filters/filters.configuration';
import { ProductsHeaderButtons } from '../common/consts/header-options.consts';
import { Preloader } from '../common/components/preloader/preloader';

export const ProductsList = () => {
  const [category, setCategory] = React.useState<string>('');
  const [search, setSearch] = React.useState<string>('');
  const { isLoading, values } = useProducts(category, search);

  const filterHandler = ({ target: { value } }: RadioChangeEvent) => {
    setCategory(value);
  };

  const searchHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <Container>
      <Header options={ProductsHeaderButtons} />
      <FilterButtons
        value={category}
        changeHandler={filterHandler}
        search={search}
        options={todoOptions}
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

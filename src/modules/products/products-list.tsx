import * as React from "react";
import { Container, LinearProgress } from "@mui/material";
import { Header } from "../common/components/header/header";
import FilterButtons from "./filters/filters.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { RadioChangeEvent } from "antd";
import { IProduct } from "../common/types/product.types";
import ProductItem from "./element/product-element";
import { useProducts } from "../hooks/product-hooks";

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
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination
        style={{ width: "100%" }}
      >
        {values.map((item: IProduct) => (
          <SwiperSlide key={item._id}>
            <ProductItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

import React from "react";
import { Radio, RadioChangeEvent } from "antd";
import { Input } from "@mui/material";
import { SPACES } from "../../../theme";
import { Box } from "@mui/system";
import { FilterStyles } from "./filters.styled";
import { IOption } from "../../types/filter.types";

interface IProps {
  changeHandler: ({ target: { value } }: RadioChangeEvent) => void;
  value: string;
  options: IOption[];
  search: string;
  onChange: (e: any) => void;
}

const FilterButtons = (props: IProps) => {
  const { changeHandler, value, search, onChange, options } = props;

  return (
    <Box sx={FilterStyles.container}>
      <Radio.Group
        size="large"
        options={options}
        onChange={changeHandler}
        value={value}
        optionType="button"
        buttonStyle="solid"
        style={{ margin: `${SPACES.s}` }}
      />
      <Input
        placeholder="Search..."
        value={search}
        onChange={onChange}
        style={{ margin: `${SPACES.s}` }}
      />
    </Box>
  );
};

export default FilterButtons;

import React from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { FilterDiv } from '../todo-list.styled';
import { Input } from '@mui/material';
import { SPACES } from '../../theme';

const options = [
  { label: 'All', value: 'all' },
  { label: 'Private', value: 'privated' },
  { label: 'Public', value: 'public' },
  { label: 'Completed', value: 'completed' }
];

interface IProps {
  changeHandler: ({ target: { value } }: RadioChangeEvent) => void;
  value: string;
  search: string;
  onChange: (e: any) => void;
}

const FilterButtons = (props: IProps) => {
  const { changeHandler, value, search, onChange } = props;

  return (
    <FilterDiv>
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
    </FilterDiv>
  );
};

export default FilterButtons;

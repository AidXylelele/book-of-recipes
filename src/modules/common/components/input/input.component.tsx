import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';
import { SPACES } from '../../../theme';

interface IInput {
  name: string;
  label: string;
}

export const Input: React.FC<IInput> = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <TextField
      fullWidth
      required
      sx={{ paddingBottom: SPACES.m }}
      id={name as string}
      name={name as string}
      label={label}
      value={field.value}
      onChange={field.onChange}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...props}
    />
  );
};

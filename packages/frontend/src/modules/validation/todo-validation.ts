import * as yup from 'yup';

export const todoSchema = yup.object({
  title: yup.string().min(2, 'Should be at least 3 letters').required('Title is required'),
  data: yup.string().min(3, 'Should be at least 3 letters').required('Description is required'),
  isDone: yup.boolean().required('Specify is task completed'),
  isPrivate: yup.boolean().required('Specify is task private')
});

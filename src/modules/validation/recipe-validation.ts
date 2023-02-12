import * as yup from 'yup';

export const recipeSchema = yup.object({
  title: yup.string().required('Required'),
  products: yup
    .array()
    .of(
      yup.object({
        title: yup.string().min(2).required(),
        category: yup.string().required('Required'),
        amount: yup.number().integer().required(),
      })
    )
    .min(1)
    .required('Products are required'),
  videoLink: yup.string().min(4).required(),
  photoLink: yup.string().min(4).required(),
  description: yup.string().min(50).max(500).required(),
  isPublic: yup.boolean().required(),
  user_id: yup.string().optional(),
  _id: yup.string().optional(),
});

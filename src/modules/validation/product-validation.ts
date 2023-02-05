import * as yup from "yup";

export const productSchema = yup.object({
  title: yup
    .string()
    .min(2, "Should be at least 3 letters")
    .required("Title is required"),
  category: yup.string().required("Category is required"),
  amount: yup.number().required("Amount is task completed"),
});

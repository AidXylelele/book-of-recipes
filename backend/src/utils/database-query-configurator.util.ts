export const filterConfigurator = (
  user_id: string,
  category: string,
  search: string
) => {
  if (!category) {
    return { user_id, ...(search && { title: { $regex: search } }) };
  }
  return {
    user_id,
    category,
    ...(search && { title: { $regex: search } }),
  };
};

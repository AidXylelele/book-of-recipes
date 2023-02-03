

export const filterConfigurator = (
  userId: string,
  category: string,
  search: string
) => {
  return {
    userId,
    category,
    ...(search && { title: { $regex: search } }),
  };
};

interface IFilter {
  user_id: string;
  category: string;
}

interface IQuery {
  [index: string]: any;
}

export const filterConfigurator = <T extends IFilter>(
  params: T,
  search: string
) => {
  const query: IQuery = {};
  for (const item in params) {
    const value = params[item];
    if (value) {
      query[item] = value;
    }
  }
  return {
    ...query,
    ...(search && { title: { $regex: search } }),
  };
};

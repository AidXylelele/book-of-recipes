export interface IProduct {
  _id?: string;
  title: string;
  category: string;
  amount: number;
  user_id: string;
}

export interface ICreateProduct {
  title: string;
  category: string;
  amount: number;
}

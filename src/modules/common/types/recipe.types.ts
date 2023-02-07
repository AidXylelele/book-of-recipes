interface IRecipeProduct {
  title: string;
  category: string;
  amount: number;
}

export interface IRecipe {
  _id?: string;
  title: string;
  products: Array<IRecipeProduct>;
  videoLink: string;
  photoLink: string;
  description: string;
  user_id: string;
  isPublic: boolean;
}


export interface ICreateRecipe {
  title: string;
  products: Array<IRecipeProduct>;
  videoLink: string;
  photoLink: string;
  description: string;
  isPublic: boolean;
}
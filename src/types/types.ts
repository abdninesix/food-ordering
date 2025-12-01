export type MenuType = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type ProductType = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type OrderType = {
  id: string;
  username: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id: string;
}

export type CartItemType = {
  id: number;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
}

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
}

export type ActionType = {
  addToCart: (item: CartItemType) => void
  removeFromCart: (item: CartItemType) => void
}

export type Options = {
  title: string,
  additionalPrice: number
}

export type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
}
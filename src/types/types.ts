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
  products: object[];
  status: string;
  createdAt: Date;
  intent_id: string;
}
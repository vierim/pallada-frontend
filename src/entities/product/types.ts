export type Product = {
  id: string;
  name: string;
  url: string;
  pic?: string;
  pack: {
    size: number,
    unit: string,
  };
  price: {
    value: number,
    unit: string,
    oldValue?: number,
  };
  vendor: string;
  rating?: number;
  discount?: number;
  religion?: boolean;
  bestSeller?: boolean;
  newProduct?: boolean;
  available?: boolean
};

import type { BasketProps } from "./types";
import { BasketInformer } from "./basket-informer";

export const Basket = ({ variant }: BasketProps) => {
  if(variant === 'informer') {
    return <BasketInformer />
  }
  
  return undefined;
};

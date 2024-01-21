import {
  Product,
  OneProductResponse,
  ManyProductsResponse,
  ProductAttributes,
} from './types';

const composeProductObject = (
  id: number,
  product: ProductAttributes
): Product => ({
  id,
  name: product.name,
  url: `/product/${id}`,
  pic: product.pic.data?.attributes.url,
  pack: {
    size: product.pack_size,
    unit: product.pack_unit,
    type: product.pack_type,
  },
  price: {
    value: product.price_value,
    unit: product.price_unit,
  },
  brand: {
    id: product.brand.data.id,
    name: product.brand.data.attributes.name,
    url: `/vendors/${product.brand.data.attributes.slug}`,
  },
  delay: product.delay,
  isOrthodox: product.isOrthodox,
  isHit: product.isHit,
  isNew: product.isNew,
});

const ejectOneProductData = (response: OneProductResponse): Product => {
  const { id, attributes: product } = response.data;

  //console.log(composeProductObject(id, product));

  return composeProductObject(id, product);
};

const ejectManyProductsData = (response: ManyProductsResponse): Product[] =>
  response.data.map((item) => composeProductObject(item.id, item.attributes));

export async function getProductData(id: number) {
  const request = await fetch(
    `https://api.pallada-mo.ru/api/products/${id}?populate=*`
  );

  if (!request.ok) {
    throw new Error('Failed to fetch product data');
  }

  const res: OneProductResponse = await request.json();

  return ejectOneProductData(res);
}

export async function getProductsByCategory(
  slug: string,
  pageNumber: string,
  pageSize: number = 15
) {
  const request = await fetch(
    `https://api.pallada-mo.ru/api/products?populate=*&filters[categories][slug][$in]=${slug}&pagination[page]=${pageNumber}&pagination[pageSize]=${pageSize}`
  );

  if (!request.ok) {
    throw new Error('Failed to fetch data');
  }

  const res: ManyProductsResponse = await request.json();

  return { products: ejectManyProductsData(res), pagination: res.meta.pagination };
}

export async function getProductsByBrand(
  slug: string,
  pageNumber: string,
  pageSize: number = 100
) {
  const request = await fetch(
    `https://api.pallada-mo.ru/api/products?populate=*&filters[brand][slug][$in]=${slug}&pagination[page]=${pageNumber}&pagination[pageSize]=${pageSize}`
  );

  if (!request.ok) {
    throw new Error('Failed to fetch data');
  }

  const res: ManyProductsResponse = await request.json();

  return { products: ejectManyProductsData(res), pagination: res.meta.pagination };
}

export async function getRelativeProductsByBrand(
  current: number,
  brand: number,
  limit: number = 3
) {
  const request = await fetch(
    `https://api.pallada-mo.ru/api/products?populate=*&filters[brand][id][$eq]=${brand}&filters[id][$nei]=${current}&pagination[start]=0&pagination[limit]=${limit}`
  );

  if (!request.ok) {
    throw new Error('Failed to fetch data');
  }

  const res: ManyProductsResponse = await request.json();

  return ejectManyProductsData(res);
}

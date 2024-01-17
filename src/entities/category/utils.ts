import { CategoriesResponse, Category } from "./types";

const ejectAllCategoriesData = (response: CategoriesResponse): Category[] =>
  response.data.map((item) => ({
    id: item.id,
    name: item.attributes.name,
    slug: item.attributes.slug,
    pic: item.attributes.pic.data.attributes.url,
    meta_title: item.attributes.meta_title,
    meta_description: item.attributes.meta_description,
    header: item.attributes.header,
    text: item.attributes.text,
  }));

const ejectCategoryData = (response: CategoriesResponse): Category => {
  const data = response.data.map((item) => ({
    id: item.id,
    name: item.attributes.name,
    slug: item.attributes.slug,
    pic: item.attributes.pic.data.attributes.url,
    meta_title: item.attributes.meta_title,
    meta_description: item.attributes.meta_description,
    header: item.attributes.header,
    text: item.attributes.text,
  }));

  return data[0];
}

export async function getAllCategories() {
  const request = await fetch(
    'https://api.pallada-mo.ru/api/categories?pagination[page]=1&pagination[pageSize]=100&sort=name&populate=pic'
  );

  if (!request.ok) {
    throw new Error('Failed to fetch categories');
  }

  const res: CategoriesResponse = await request.json();

  return ejectAllCategoriesData(res);
}

export async function getCategoryData(slug: string) {
  const request = await fetch(
    `https://api.pallada-mo.ru/api/categories?filters[slug][$eq]=${slug}&populate=pic`
  );

  if (!request.ok) {
    throw new Error('Failed to fetch data');
  }

  const res: CategoriesResponse = await request.json();

  return ejectCategoryData(res);
}

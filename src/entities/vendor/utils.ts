import { AllVendorsResponse } from './types';

const composeVendorObject = (
  id: number,
  vendor: any
): any => ({
  id,
  name: vendor.name,
  url: `/vendors/${vendor.slug}`,
  meta_title: vendor.meta_title || vendor.name,
  meta_description: vendor.meta_description,
  header: vendor.header || vendor.name,
  desc: vendor.desc,
  text: vendor.text,
});

const ejectOneVendorData = (response: any): any => {
  const { id, attributes: vendor } = response.data[0];

  return composeVendorObject(id, vendor);
};

export async function getAllVendors() {
  const request = await fetch(
    `https://api.pallada-mo.ru/api/brands?pagination[pageSize]=100&sort=name`
  );

  if (!request.ok) {
    throw new Error('Failed to fetch vendors');
  }

  const res: AllVendorsResponse = await request.json();

  return res.data;
}

export async function getVendorData(slug: string) {
  const request = await fetch(
    `https://api.pallada-mo.ru/api/brands?filters[slug][$in]=${slug}`
  );

  if (!request.ok) {
    throw new Error('Failed to fetch data');
  }

  const res: any = await request.json();

  return ejectOneVendorData(res);
}

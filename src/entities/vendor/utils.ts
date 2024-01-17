import { AllVendorsResponse } from './types';

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

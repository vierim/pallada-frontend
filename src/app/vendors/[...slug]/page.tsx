import { PageHeader } from '@/shared/ui/page-header';
import { ProductsList } from '@/entities/product/ui/products-list';
import { Pagination } from '@/widgets/pagination';

import { getProductsByBrand } from "@/entities/product/utils";

type VendorPageProps = {
  params: {
    slug: string;
  };
};

async function getVendor(slug: string) {
  const res = await fetch(
    `https://api.pallada-mo.ru/api/brands?filters[slug][$in]=${slug}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function VendorPage({
  params: { slug },
}: VendorPageProps) {

  const { data: vendor } = await getVendor(slug);
  const { products } = await getProductsByBrand(
    slug[0],
    '1'
  );

  return (
    <>
      <PageHeader>{vendor[0]?.attributes.name}</PageHeader>
      <ProductsList products={products} />

      {/*{pagination.pageCount > 1 && (*/}
      {/*  <Pagination entity="vendors" slug={slug} pagination={pagination} />*/}
      {/*)}*/}
    </>
  );
}

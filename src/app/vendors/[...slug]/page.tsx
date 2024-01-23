import { Metadata } from 'next';

import { PageHeader } from '@/shared/ui/page-header';
import { TextWrapper } from "@/widgets/text-wrapper";
import { ProductsList } from '@/entities/product/ui/products-list';
import { Pagination } from '@/widgets/pagination';

import { getVendorData } from '@/entities/vendor/utils';
import { getProductsByBrand } from '@/entities/product/utils';

type Props = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({
  params: { slug: items },
}: Props): Promise<Metadata> {
  const [slug, pageNumber] = items;
  const { header, meta_title, meta_description } = await getVendorData(slug);

  return {
    title: pageNumber
      ? `${header} - страница ${pageNumber.slice(4)}`
      : meta_title,
    description: meta_description || '',
  };
}

export default async function VendorPage({ params: { slug: items } }: Props) {
  const [slug, pageNumber] = items;

  const vendor = await getVendorData(slug);
  const { products, pagination } = await getProductsByBrand(
    slug,
    pageNumber ? pageNumber.slice(4) : '1'
  );

  return (
    <>
      <PageHeader>
        {pageNumber
          ? `${vendor.header} - страница ${pageNumber.slice(4)}`
          : vendor.header}
      </PageHeader>

      {!pageNumber && vendor.desc && <TextWrapper text={vendor.desc} />}

      <ProductsList products={products} />

      {pagination.pageCount > 1 && (
        <Pagination entity="vendors" slug={slug} pagination={pagination} />
      )}

      {!pageNumber && vendor.text && <TextWrapper text={vendor.text} />}
    </>
  );
}

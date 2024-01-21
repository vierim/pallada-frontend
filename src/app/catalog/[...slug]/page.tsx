import { PageHeader } from '@/shared/ui/page-header';
import { ProductsList } from '@/entities/product/ui/products-list';
import { Pagination } from '@/widgets/pagination';

import { getProductsByCategory } from '@/entities/product/utils';
import { getCategoryData } from '@/entities/category/utils';

type CatalogPageProps = {
  params: {
    slug: string[];
  };
};

export default async function CatalogPage({
  params: { slug: items },
}: CatalogPageProps) {
  const [slug, pageNumber] = items;

  const { header, name } = await getCategoryData(slug);
  const { products, pagination } = await getProductsByCategory(
    slug,
    pageNumber ? pageNumber.slice(4) : '1'
  );

  return (
    <>
      <PageHeader>{header || name}</PageHeader>
      <ProductsList products={products} />

      {pagination.pageCount > 1 && (
        <Pagination slug={slug} pagination={pagination} />
      )}
    </>
  );
}

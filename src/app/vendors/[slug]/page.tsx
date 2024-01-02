import Link from 'next/link';
import styles from '@/app/product/[id]/page.module.css';
import { BreadCrumps } from '@/widgets/breadcrumps';
import { getBreadCrumps } from '@/helpers/getBreadCrumps';
import { ProductsList } from '@/entities/product/ui/products-list';
import { Pagination } from "@/widgets/pagination";

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

async function getProducts(slug: string, pageNumber: number = 1) {
  const res = await fetch(
    `https://api.pallada-mo.ru/api/products?populate=*&filters[brand][slug][$in]=${slug}&pagination[page]=${pageNumber}&pagination[pageSize]=15`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function VendorPage({
  params: { slug },
}: VendorPageProps) {
  const breadcrumbs = getBreadCrumps([]);

  const { data: vendor } = await getVendor(slug);
  const {
    data: productsData,
    meta: { pagination: pagination },
  } = await getProducts(slug);

  // console.log(data);

  const products = productsData.map((item: any) => ({
    id: item.id,
    name: item.attributes.name,
    url: `/product/${item.id}`,
    pic: item.attributes?.pic.data?.attributes.url || '',
    pack: {
      size: item.attributes.pack_size,
      unit: `${item.attributes.pack_unit}/${item.attributes.pack_type}`,
    },
    price: {
      value: item.attributes.price_value,
      unit: `руб/${item.attributes.price_unit}`,
    },
    vendor: item.attributes.brand.data?.attributes.name,
    rating: 5,
    religion: item.attributes.isOrthodox,
  }));

  return (
    <main className={`${styles.container} page-section`}>
      <div className={styles.breadcrumps}>
        <BreadCrumps breadcrumps={breadcrumbs} />
      </div>

      <h1 className={styles.headline}>{vendor[0].attributes.name}</h1>

      <ProductsList products={products} />

      {pagination.pageCount > 1 && (
        <section className={styles.pagination}>
          <Pagination slug={slug} pagination={pagination} />
        </section>
      )}
    </main>
  );
}

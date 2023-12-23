import styles from './page.module.css';
import { BreadCrumps } from '@/widgets/breadcrumps';
import { getBreadCrumps } from '@/helpers/getBreadCrumps';
import { ProductsList } from '@/entities/product/ui/products-list';
import { Pagination } from "@/widgets/pagination";

type CatalogPageProps = {
  params: {
    slug: string;
  };
};

async function getData(slug: string) {
  const res = await fetch(
    `https://api.pallada-mo.ru/api/categories?filters[slug][$eq]=${slug}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getProducts(slug: string) {
  const res = await fetch(
    `https://api.pallada-mo.ru/api/products?populate=*&filters[categories][slug][$in]=${slug}&pagination[page]=1&pagination[pageSize]=15`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProductPage({
  params: { slug },
}: CatalogPageProps) {
  const { data } = await getData(slug);
  const { data: productsData, meta: { pagination: pagination } } = await getProducts(slug);
  const breadcrumps = getBreadCrumps(data.attributes);

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
      <div className={styles.breadcrumbs}>
        <BreadCrumps breadcrumps={breadcrumps} />
      </div>

      <h1 className={styles.headline}>{data[0].attributes.header}</h1>

      <section className={'page-section'}>
        <ProductsList products={products} />
      </section>

      <section className={styles.pagination}>
        <Pagination pagination={pagination} />
      </section>
    </main>
  );
}

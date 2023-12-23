import Image from 'next/image';

import { BreadCrumps } from '@/widgets/breadcrumps';
import { getBreadCrumps } from '@/helpers/getBreadCrumps';

import styles from './page.module.css';
import { ProductItem } from '@/entities/product/ui/product-item';

type ProductPageProps = {
  params: {
    id: string;
  };
};

async function getData(id: number) {
  const res = await fetch(
    `https://api.pallada-mo.ru/api/products/${id}?populate=*`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getProducts(id: number) {
  const res = await fetch(
    `https://api.pallada-mo.ru/api/products?populate=*&filters[brand][id][$eq]=${id}&pagination[start]=0&pagination[limit]=6`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const { data } = await getData(parseInt(id));
  const { data: products } = await getProducts(data.attributes.brand.data.id);
  const breadcrumps = getBreadCrumps(data.attributes);

  return (
    <main className={`${styles.container} page-section`}>
      <div className={styles.breadcrumps}>
        <BreadCrumps breadcrumps={breadcrumps} />
      </div>

      <h1 className={styles.headline}>{data.attributes.name}</h1>

      <div className={styles.product}>
        <Image
          className={styles.pic}
          src={data.attributes.pic.data?.attributes.url || ''}
          alt={data.attributes.name || 'none provided'}
          width={500}
          height={421}
        />
        <div className={styles.info}>
          <ul className={styles.params}>
            <li className={styles.char}>
              <span className={styles.label}>Производитель</span>
              {data.attributes.brand.data.attributes.name}
            </li>
            <li className={styles.char}>
              <span className={styles.label}>Упаковка</span>
              {data.attributes.pack_size} {data.attributes.pack_unit}/
              {data.attributes.pack_type}
            </li>
            <li className={styles.char}>
              <span className={styles.label}>Срок годности</span>
              {data.attributes.delay}
            </li>
          </ul>
        </div>
        <div className={styles.ordering}>
          <div>Розничная цена - 123</div>
          <button>Добавить в корзину</button> Купить в 1 клик Получить оптовую
          цену
        </div>
      </div>
      <div className={`${styles.proposals} page-section`}>
        <h3 className={styles.subtitle}>Другие товары</h3>

        <ul className={styles.list}>
          {products.map((item: any) => {
            const product = {
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
              vendor: item.attributes.brand.data.attributes.name,
              rating: 5,
              religion: item.attributes.isOrthodox,
            };

            return (
              <li key={item.id}>
                <ProductItem {...product} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

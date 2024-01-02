import Link from 'next/link';
import styles from '@/app/product/[id]/page.module.css';
import { BreadCrumps } from '@/widgets/breadcrumps';
import { getBreadCrumps } from '@/helpers/getBreadCrumps';

async function getVendors() {
  const res = await fetch(`https://api.pallada-mo.ru/api/brands`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function VendorsPage() {
  const breadcrumbs = getBreadCrumps([]);
  const { data: vendors } = await getVendors();

  return (
    <main className={`${styles.container} page-section`}>
      <div className={styles.breadcrumps}>
        <BreadCrumps breadcrumps={breadcrumbs} />
      </div>

      <h1 className={styles.headline}>Производители кондитерских изделий</h1>

      <ul>
        {vendors.map((item: any) => {
          return (
            <li key={item.id}>
              <Link href={`/vendors/${item.attributes.slug}`}>
                {item.attributes.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

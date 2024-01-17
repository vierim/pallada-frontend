import Link from 'next/link';

import { PageHeader } from '@/shared/ui/page-header';
import { getAllVendors } from '@/entities/vendor/utils';

import styles from './page.module.css';

export default async function VendorsPage() {
  const vendors = await getAllVendors();

  return (
    <div>
      <PageHeader>Производители кондитерских изделий</PageHeader>

      <ul className={styles.list}>
        {vendors.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <Link
                href={`/vendors/${item.attributes.slug}`}
                className={styles.link}
              >
                {item.attributes.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

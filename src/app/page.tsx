import { Cover } from '@/widgets/cover';
import { 
  CatalogSection,
  TextSection,
  PopularProducts
} from '@/widgets/page-sections';

import styles from './page.module.css';

import { mainPage, porducts } from '@/temp-data';

export default function Home() {
  return (
    <main className={styles.main}>
      <Cover />
      <CatalogSection />
      <TextSection 
        text={mainPage.text.content} 
        headline={mainPage.text.headline}
      />
      <PopularProducts 
        headline='Популярные товары'
        payload={porducts}
      />
    </main>
  )
}

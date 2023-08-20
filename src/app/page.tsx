import Image from 'next/image'
import styles from './page.module.css'
import { Cover } from '@/widgets/cover'
import { CatalogSection } from '@/widgets/page-sections/catalog/catalog'

export default function Home() {
  return (
    <main className={styles.main}>
      <Cover />
      <CatalogSection />
    </main>
  )
}

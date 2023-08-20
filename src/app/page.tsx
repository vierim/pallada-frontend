import Image from 'next/image'
import styles from './page.module.css'
import { Cover } from '@/widgets/cover'

export default function Home() {
  return (
    <main className={styles.main}>
      <Cover />
    </main>
  )
}

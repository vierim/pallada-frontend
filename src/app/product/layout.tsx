import { Breadcrumbs } from '@/widgets/breadcrumbs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`page-section page-container`}>
      <Breadcrumbs />
      {children}
    </main>
  );
}

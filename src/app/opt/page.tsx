import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { PageHeader } from '@/shared/ui/page-header';

export default async function OptPage() {
  return (
    <main className={`page-section page-container`}>
      <Breadcrumbs />
      <PageHeader>
        Информация для оптовых покупателей
      </PageHeader>
    </main>
  );
}

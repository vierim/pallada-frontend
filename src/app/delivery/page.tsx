import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { PageHeader } from '@/shared/ui/page-header';

export default async function DeliveryPage() {
  return (
    <main className={`page-section page-container`}>
      <Breadcrumbs />
      <PageHeader>
        Доставка кондитерских изделий
      </PageHeader>
    </main>
  );
}

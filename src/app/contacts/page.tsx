import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { PageHeader } from '@/shared/ui/page-header';

export default async function ContactsPage() {
  return (
    <main className={`page-section page-container`}>
      <Breadcrumbs />
      <PageHeader>
        Контактная информация - ООО «Паллада»
      </PageHeader>
    </main>
  );
}

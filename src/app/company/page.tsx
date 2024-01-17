import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { PageHeader } from '@/shared/ui/page-header';

export default async function CompanyPage() {
  return (
    <main className={`page-section page-container`}>
      <Breadcrumbs />
      <PageHeader>
        Информация о компании «Паллада»
      </PageHeader>
    </main>
  );
}

import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { PageHeader } from '@/shared/ui/page-header';

export default async function PrivacyPage() {
  return (
    <main className={`page-section page-container`}>
      <Breadcrumbs />
      <PageHeader>
        Политика конфиденциальности персональных данных
      </PageHeader>
    </main>
  );
}

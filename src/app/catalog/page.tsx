import { PageHeader } from '@/shared/ui/page-header';
import { CategoriesList } from "@/entities/category/ui/categories-list";

export default async function MainCatalogPage() {
  return (
    <>
      <PageHeader>Каталог продукции</PageHeader>
      <CategoriesList />
    </>
  );
}

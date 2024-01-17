import { BreadcrumbsList } from "./types";

export const getBreadcrumbs = (path: string) => {
  const pathList = path.slice(1, path.length).split('/');
  const breadcrumbs: BreadcrumbsList = [];

  breadcrumbs.push({ _id: 0, title: 'Главная', url: '/' });

  if(pathList.length > 1) {
    if (pathList[0] === 'catalog' || pathList[0] === 'product') {
      breadcrumbs.push({ _id: 1, title: 'Каталог продукции', url: '/catalog' });
    }

    if (pathList[0] === 'vendors') {
      breadcrumbs.push({ _id: 1, title: 'Все производители', url: '/vendors' });
    }
  }

  return breadcrumbs;
};

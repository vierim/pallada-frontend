export type BreadCrumpsItem = {
  _id: number;
  title: string;
  url: string;
};

export type BreadCrumpsList = BreadCrumpsItem[];

export const getBreadCrumps = (data: any) => {
  const items: BreadCrumpsList = [];

  const category = {
    name: data?.categories?.data[0]?.attributes.name || '',
    slug: data?.categories?.data[0]?.attributes.slug || '',
  };
  const brand = {
    name: data?.brand?.data.attributes.name || '',
    slug: data?.brand?.data.attributes.slug || '',
  };

  items.push({ _id: 0, title: 'Главная', url: '/' });

  if (category.name.length > 0) {
    items.push({ _id: 1, title: 'Каталог продукции', url: '/catalog' });
    const lastPageUrl = items[items.length - 1].url;

    items.push({
      _id: items.length,
      title: category.name,
      url: `${lastPageUrl}/${category.slug}`,
    });
  }

  if (brand.name.length > 0) {
    const lastPageUrl = items[items.length - 1].url;

    items.push({
      _id: items.length,
      title: brand.name,
      url: `${lastPageUrl}/${brand.slug}`,
    });
  }

  items.push({
    _id: items.length,
    title: data?.name,
    url: '',
  });

  return items;
};

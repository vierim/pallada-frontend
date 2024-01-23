export type Product = {
  id: number;
  name: string;
  url: string;
  pic: string;
  pack: {
    size: number;
    unit: string;
    type: string;
  };
  price: {
    value: number;
    unit: string;
  };
  brand: {
    id: number;
    name: string;
    url: string;
  };
  delay: string | null;
  isOrthodox: boolean;
  isHit: boolean;
  isNew: boolean;
  meta_title?: string | null;
  meta_description?: string | null;
  header?: string | null;
};

export type ProductAttributes = {
  name: string;
  meta_title: string | null;
  meta_description: string | null;
  header: string | null;
  price_value: number;
  price_unit: string;
  pack_size: number;
  pack_unit: string;
  pack_type: string;
  delay: string | null;
  text: string | null;
  content: string | null;
  onMainPage: boolean;
  isNew: boolean;
  isOrthodox: boolean;
  isHit: boolean;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pic: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
          thumbnail: {
            ext: '.jpg' | '.png' | '.webp';
            url: string;
            hash: string;
            mime: string;
            name: string;
            path: string | null;
            size: number;
            width: number;
            height: number;
          };
        };
        hash: string;
        ext: '.jpg' | '.png' | '.webp';
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: string | null;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
  brand: {
    data: {
      id: number;
      attributes: {
        name: string;
        slug: string;
        meta_title: string | null;
        meta_description: string | null;
        header: string | null;
        desc: string | null;
        text: string | null;
        isVisible: boolean;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      };
    };
  };
  categories: {
    data: [
      {
        id: number;
        attributes: {
          name: string;
          slug: string;
          meta_title: string | null;
          meta_description: string | null;
          header: string | null;
          text: string | null;
          isVisible: boolean;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      },
    ];
  };
};

export type ProductDataAtResponse = {
  id: number;
  attributes: ProductAttributes;
};

export type OneProductResponse = {
  data: ProductDataAtResponse;
  meta: NonNullable<unknown>;
};

export type ManyProductsResponse = {
  data: ProductDataAtResponse[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

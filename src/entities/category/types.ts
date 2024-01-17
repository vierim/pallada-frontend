export type Category = {
  id: number;
  name: string;
  slug: string;
  pic: string;
  meta_title: string | null;
  meta_description: string | null;
  header: string | null;
  text: string | null;
}

export type CategoryDataAtResponse = {
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
  };
};

export type CategoriesResponse = {
  data: CategoryDataAtResponse[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

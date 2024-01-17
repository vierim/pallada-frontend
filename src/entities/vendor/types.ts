export type VendorResponse = {
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
};

export type AllVendorsResponse = {
  data: VendorResponse[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

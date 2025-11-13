export interface NewAdvertisementRequest {
  storeName: string;
  productImages: { id: number, src: string }[];
  cost: number,
  description: string;
  tags: { id: number, name: string };
}

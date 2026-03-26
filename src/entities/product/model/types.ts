
export type Dimensions = {
  width: number;
  height: number;
  depth: number;
};


export type Review = {
  rating: number;
  comment: string;
  date: string; 
  reviewerName: string;
  reviewerEmail: string;
};


export type ProductMeta = {
  createdAt: string; 
  updatedAt: string; 
  barcode: string;
  qrCode: string;
};


export type ProductDto = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  thumbnail: string;
  images: string[];
};


export type GetProductsResponse = {
  products: ProductDto[];
  total: number;
};
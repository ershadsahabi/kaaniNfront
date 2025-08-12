// src/types/product.ts
export interface Product {
  id: number
  name: string
  sku?: string | null
  barcode?: string | null
  category?: number | { id:number; name:string } | null
  supplier?: number | null
  base_price: string | number
  unit?: string | null
  expire_date?: string | null
  weight?: string | null
  image?: string | null
  [key: string]: any
}

export interface PaginatedProducts {
  count: number
  next: string | null
  previous: string | null
  results: Product[]
}

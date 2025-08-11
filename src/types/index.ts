export type Product = {
  id: number
  name: string
  sku?: string | null
  barcode?: string | null
  base_price?: string | number
  unit?: string | null
  expire_date?: string | null
  supplier?: {
    id: number
    name: string
  } | null
  created_at?: string
  updated_at?: string
}

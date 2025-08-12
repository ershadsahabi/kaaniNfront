// src/components/products/ProductList.server.tsx
import React from 'react'
import ProductCard from './ProductCard.client' // client component allowed to be imported
import type { PaginatedProducts } from '@/types/product'

type Props = {
  data: PaginatedProducts
}

export default function ProductList({ data }: Props) {
  if (!data || data.results.length === 0) {
    return <p>هیچ محصولی یافت نشد.</p>
  }

  return (
    <section className="product-grid" aria-live="polite">
      {data.results.map((p) => (
        // ProductCard is a client component; it will be hydrated on the client side
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  )
}

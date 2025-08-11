import React from 'react'
import { getPublicProducts } from '@/lib/serverApi'
import ProductCard from './ProductCard'

export default async function ProductGrid({ limit = 8 }: { limit?: number }) {
  let products: any[] = []

  try {
    const data = await getPublicProducts(limit)
    products = data.results || data
  } catch (error) {
    console.error('Error fetching products:', error)
    return <p className="error-text">خطا در بارگذاری محصولات</p>
  }

  if (!products.length) {
    return <p className="empty-text">هیچ محصولی یافت نشد.</p>
  }

  return (
    <section className="products">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

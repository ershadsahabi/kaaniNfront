// src/components/products/ProductCard.client.tsx
'use client'

import React from 'react'
import type { Product } from '@/types/product'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const handleAddToCart = () => {
    try {
      const raw = localStorage.getItem('cart')
      const cart = raw ? JSON.parse(raw) : []
      const idx = cart.findIndex((it: any) => it.id === product.id)
      if (idx >= 0) {
        cart[idx].qty = (cart[idx].qty || 1) + 1
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: Number(product.base_price) || 0,
          qty: 1,
        })
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      // می‌تونی این‌جا از یک Toast library استفاده کنی
      alert('محصول به سبد اضافه شد')
    } catch (e) {
      console.error(e)
      alert('خطا در افزودن به سبد')
    }
  }

  const price = Number(product.base_price || 0).toLocaleString('fa-IR')

  return (
    <article className="product-card" aria-labelledby={`product-${product.id}`}>
      <img
        src={product.image || '/images/product-placeholder.png'}
        alt={product.name}
        className="product-image"
        width={240}
        height={240}
        style={{ objectFit: 'cover' }}
      />
      <h3 id={`product-${product.id}`} className="product-title">{product.name}</h3>
      <div className="product-meta">
        <span className="product-price">{price} تومان</span>
        <span className="product-unit">{product.unit || ''}</span>
      </div>
      <div className="product-actions">
        <button className="btn btn-primary" onClick={handleAddToCart}>افزودن به سبد</button>
      </div>
    </article>
  )
}

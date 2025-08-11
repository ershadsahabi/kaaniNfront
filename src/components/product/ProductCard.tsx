// Server Component — رندر ساده بدون state
import React from 'react'
import styles from './ProductCard.module.css'
import type { Product } from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.name}>{product.name}</h3>
        {product.sku && <span className={styles.sku}>SKU: {product.sku}</span>}
      </div>

      <div className={styles.meta}>
        <div className={styles.price}>
          {product.base_price ? `${product.base_price} تومان` : 'قیمت ندارد'}
        </div>

        <div className={styles.supplier}>
          {product.supplier?.name ?? 'تأمین‌کننده نامشخص'}
        </div>
      </div>

      {product.expire_date && (
        <div className={styles.expire}>انقضا: {new Date(product.expire_date).toLocaleDateString('fa-IR')}</div>
      )}
    </article>
  )
}

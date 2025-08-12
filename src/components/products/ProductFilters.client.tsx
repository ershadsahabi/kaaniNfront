// src/components/products/ProductFilters.client.tsx
'use client'

import React, { useState, useTransition } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

type Initial = {
  search?: string | undefined
  page_size?: string | undefined
  ordering?: string | undefined
}

export default function ProductFilters({ initial }: { initial?: Initial }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [q, setQ] = useState(initial?.search ?? (searchParams.get('search') ?? ''))
  const [pageSize, setPageSize] = useState(initial?.page_size ?? (searchParams.get('page_size') ?? '12'))
  const [ordering, setOrdering] = useState(initial?.ordering ?? (searchParams.get('ordering') ?? ''))
  const [isPending, startTransition] = useTransition()

  function apply(e?: React.FormEvent) {
    e?.preventDefault()
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set('page', '1') // وقتی فیلتر تغییر کرد به صفحهٔ اول برمی‌گردیم
    if (q) params.set('search', q)
    else params.delete('search')
    if (pageSize) params.set('page_size', pageSize)
    else params.delete('page_size')
    if (ordering) params.set('ordering', ordering)
    else params.delete('ordering')

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`)
    })
  }

  return (
    <form className="product-filters" onSubmit={apply}>
      <input
        type="search"
        aria-label="جستجوی محصولات"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="جستجو..."
      />

      <select value={pageSize} onChange={(e) => setPageSize(e.target.value)} aria-label="تعداد در هر صفحه">
        <option value="8">8</option>
        <option value="12">12</option>
        <option value="24">24</option>
      </select>

      <select value={ordering} onChange={(e) => setOrdering(e.target.value)} aria-label="مرتب‌سازی">
        <option value="">مرتب‌سازی</option>
        <option value="name">نام ↑</option>
        <option value="-name">نام ↓</option>
        <option value="base_price">قیمت ↑</option>
        <option value="-base_price">قیمت ↓</option>
      </select>

      <button type="submit" className="btn" disabled={isPending}>{isPending ? 'در حال...' : 'اعمال'}</button>
    </form>
  )
}

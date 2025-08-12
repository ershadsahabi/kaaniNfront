// src/components/products/ProductPagination.client.tsx
'use client'

import React from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

type Props = {
  count: number
  page: number
  page_size: number
}

export default function ProductPagination({ count, page, page_size }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const totalPages = Math.max(1, Math.ceil(count / page_size))

  const goto = (p: number) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set('page', String(p))
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <nav aria-label="صفحه‌بندی" className="product-pagination">
      <button onClick={() => goto(Math.max(1, page - 1))} disabled={page <= 1}>قبلی</button>
      <span>صفحه {page} از {totalPages}</span>
      <button onClick={() => goto(Math.min(totalPages, page + 1))} disabled={page >= totalPages}>بعدی</button>
    </nav>
  )
}

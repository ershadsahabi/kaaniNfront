// src/lib/serverApi.ts
export type GetPublicProductsOptions = {
  page?: number
  page_size?: number
  search?: string
  ordering?: string
  category?: string | number
}

export async function getPublicProducts(opts: GetPublicProductsOptions = {}) {
  const {
    page = 1,
    page_size = 12,
    search,
    ordering,
    category,
  } = opts

  const params = new URLSearchParams()
  params.set('page', String(page))
  params.set('page_size', String(page_size))
  if (search) params.set('search', search)
  if (ordering) params.set('ordering', ordering)
  if (category !== undefined && category !== null) params.set('category', String(category))

  const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
  const url = `${base}/public-products/?${params.toString()}`

  const res = await fetch(url, { cache: 'no-store' }) // SSR: همیشه تازه
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`getPublicProducts failed: ${res.status} ${body}`)
  }
  return res.json() // انتظار دارم ساختار DRF: {count, next, previous, results: [...]}
}

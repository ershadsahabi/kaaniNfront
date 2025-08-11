export async function getPublicProducts(limit: number = 8) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/public-products/?page_size=${limit}`,
    {
      cache: 'no-store', // برای اینکه همیشه تازه بیاره
    }
  )

  if (!res.ok) {
    const errorBody = await res.text()
    throw new Error(`Failed to fetch products: ${res.status} ${errorBody}`)
  }

  return res.json()
}

import { getPublicProducts } from '@/lib/serverApi'

export default async function HomePage() {
  let products: any[] = []
  try {
    const data = await getPublicProducts(8)
    products = data.results || data
  } catch (error) {
    console.error('Error fetching products for homepage:', error)
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          محصولات
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            هیچ محصولی یافت نشد.
          </p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <li
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
              >
                {product.image_url && (
                  <div className="w-full overflow-hidden">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full max-h-48 object-cover transition-transform duration-300 hover:scale-105"
                      style={{ height: '192px' }} // 48 * 4 = 192 px ارتفاع ثابت
                    />
                  </div>
                )}

                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500 flex-grow line-clamp-2 mb-4">
                    {product.description || 'بدون توضیحات'}
                  </p>
                  <p className="text-base font-semibold text-indigo-600">
                    {product.price?.toLocaleString()} تومان
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

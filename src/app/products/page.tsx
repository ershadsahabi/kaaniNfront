// src/app/products/page.tsx
import React from 'react';
import ProductList from '@/components/products/ProductList.server';
import ProductFilters from '@/components/products/ProductFilters.client';
import ProductPagination from '@/components/products/ProductPagination.client';
import { getPublicProducts } from '@/lib/serverApi';
import type { PaginatedProducts } from '@/types/product';

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ProductsPage({ searchParams }: Props) {
  // ✅ گرفتن پارامترها به صورت async برای جلوگیری از mismatch
  const params = await searchParams;

  // 🔹 توابع کمکی برای تبدیل امن پارامترها
  const toNumber = (value: string | string[] | undefined, fallback: number) => {
    const strValue = Array.isArray(value) ? value[0] : value;
    const num = parseInt(strValue || '', 10);
    return Number.isFinite(num) && num > 0 ? num : fallback;
  };

  const toStringParam = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] : value || undefined;

  // 📌 استخراج و اعتبارسنجی پارامترها
  const page = toNumber(params.page, 1);
  const page_size = toNumber(params.page_size, 12);
  const search = toStringParam(params.search);
  const ordering = toStringParam(params.ordering);

  // 📌 مقدار اولیه داده‌ها
  let data: PaginatedProducts = { count: 0, next: null, previous: null, results: [] };

  try {
    // 🗄️ درخواست به API سمت سرور
    data = await getPublicProducts({ page, page_size, search, ordering });
  } catch (err) {
    console.error('❌ Failed to load products', err);
    // اینجا میشه یک پیام خطا یا Fallback UI هم اضافه کرد
  }

  return (
    <div className="page-products container">
      <header className="products-header">
        <h1>📦 محصولات</h1>
        <p className="muted">
          {data.count > 0
            ? `نمایش ${data.count} محصول`
            : 'هیچ محصولی یافت نشد'}
        </p>
      </header>

      {/* 🎯 فیلتر محصولات — Client component */}
      <ProductFilters
        initial={{ search, page_size: String(page_size), ordering }}
      />

      {/* 🖥️ لیست محصولات — Server component */}
      <ProductList data={data} />

      {/* 📑 صفحه‌بندی — Client component */}
      <ProductPagination count={data.count} page={page} page_size={page_size} />
    </div>
  );
}

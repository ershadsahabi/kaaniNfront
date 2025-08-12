// src/app/suppliers/page.tsx
import Link from 'next/link';
import SupplierList from '@/components/suppliers/SupplierList.server';

export default function SuppliersPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1>🏷️ تامین‌کنندگان</h1>
        <Link href="/suppliers/new" className="btn-primary">➕ افزودن تامین‌کننده</Link>
      </header>
      <SupplierList />
    </div>
  );
}

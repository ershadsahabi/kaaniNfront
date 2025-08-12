'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { deleteSupplier } from '@/lib/supplierApi';

export default function SupplierActions({ id }: { id: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm('آیا مطمئن هستید که می‌خواهید این تامین‌کننده را حذف کنید؟')) {
      await deleteSupplier(id);
      router.refresh();
    }
  };

  return (
    <div className="action-buttons">
      <button onClick={() => router.push(`/suppliers/${id}/edit`)}>✏️ ویرایش</button>
      <button onClick={handleDelete} style={{ color: 'red' }}>🗑️ حذف</button>
    </div>
  );
}

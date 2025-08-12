import React from 'react';
import SupplierForm from '@/components/suppliers/SupplierForm.client';
import { getSupplier } from '@/lib/supplierApi';

type Props = { params: { id: string } };

export default async function EditSupplierPage({ params }: Props) {
  const supplier = await getSupplier(Number(params.id));

  return (
    <div className="container">
      <h1>✏️ ویرایش تامین‌کننده</h1>
      <SupplierForm initialData={supplier} />
    </div>
  );
}

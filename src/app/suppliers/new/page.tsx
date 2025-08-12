import React from 'react';
import SupplierForm from '@/components/suppliers/SupplierForm.client';

export default function NewSupplierPage() {
  return (
    <div className="container">
      <h1>➕ افزودن تامین‌کننده</h1>
      <SupplierForm />
    </div>
  );
}

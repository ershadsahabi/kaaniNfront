// src/components/suppliers/SupplierList.server.tsx
import React from 'react';
import { getSuppliers } from '@/lib/supplierApi.server';
import SupplierActions from './SupplierActions.client';

export default async function SupplierList() {
  const suppliers = await getSuppliers();

  if (!suppliers.length) {
    return <p className="muted">هیچ تامین‌کننده‌ای ثبت نشده است</p>;
  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>نام</th>
          <th>شخص تماس</th>
          <th>تلفن</th>
          <th>ایمیل</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((sup) => (
          <tr key={sup.id}>
            <td>{sup.name}</td>
            <td>{sup.contact_person || '-'}</td>
            <td>{sup.phone || '-'}</td>
            <td>{sup.email || '-'}</td>
            <td>
              <SupplierActions id={sup.id!} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

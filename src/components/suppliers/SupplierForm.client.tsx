'use client';

import React, { useState } from 'react';
import { createSupplier, updateSupplier, Supplier } from '@/lib/supplierApi';
import { useRouter } from 'next/navigation';

type Props = {
  initialData?: Supplier;
};

export default function SupplierForm({ initialData }: Props) {
  const [formData, setFormData] = useState<Supplier>(initialData || { name: '' });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.id) {
      await updateSupplier(formData.id, formData);
    } else {
      await createSupplier(formData);
    }
    router.push('/suppliers');
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>نام</label>
      <input name="name" value={formData.name} onChange={handleChange} required />

      <label>شخص تماس</label>
      <input name="contact_person" value={formData.contact_person || ''} onChange={handleChange} />

      <label>تلفن</label>
      <input name="phone" value={formData.phone || ''} onChange={handleChange} />

      <label>ایمیل</label>
      <input name="email" value={formData.email || ''} onChange={handleChange} type="email" />

      <label>آدرس</label>
      <textarea name="address" value={formData.address || ''} onChange={handleChange} />

      <label>یادداشت</label>
      <textarea name="notes" value={formData.notes || ''} onChange={handleChange} />

      <button type="submit" className="btn-primary">ثبت</button>
    </form>
  );
}

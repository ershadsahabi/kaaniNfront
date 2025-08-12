// src/lib/supplierApi.server.ts
import { cookies } from 'next/headers';

export type Supplier = {
  id?: number;
  name: string;
  contact_person?: string;
  phone?: string;
  email?: string;
  address?: string;
  notes?: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

function getAuthHeadersServer() {
  const cookieStore = cookies();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  const accessToken = cookieStore.get('access')?.value;
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const csrfToken = cookieStore.get('csrftoken')?.value;
  if (csrfToken) {
    headers['X-CSRFToken'] = csrfToken;
  }

  return headers;
}

export async function getSuppliers(): Promise<Supplier[]> {
  const res = await fetch(`${API_URL}/suppliers/`, {
    method: 'GET',
    headers: getAuthHeadersServer(),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('خطا در دریافت تامین‌کنندگان');
  return res.json();
}

export async function getSupplier(id: number): Promise<Supplier> {
  const res = await fetch(`${API_URL}/suppliers/${id}/`, {
    method: 'GET',
    headers: getAuthHeadersServer(),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('خطا در دریافت اطلاعات تامین‌کننده');
  return res.json();
}

export async function createSupplier(data: Supplier) {
  const res = await fetch(`${API_URL}/suppliers/`, {
    method: 'POST',
    headers: getAuthHeadersServer(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('خطا در ایجاد تامین‌کننده');
  return res.json();
}

export async function updateSupplier(id: number, data: Supplier) {
  const res = await fetch(`${API_URL}/suppliers/${id}/`, {
    method: 'PUT',
    headers: getAuthHeadersServer(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('خطا در ویرایش تامین‌کننده');
  return res.json();
}

export async function deleteSupplier(id: number) {
  const res = await fetch(`${API_URL}/suppliers/${id}/`, {
    method: 'DELETE',
    headers: getAuthHeadersServer(),
  });
  if (!res.ok) throw new Error('خطا در حذف تامین‌کننده');
}

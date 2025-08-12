// src/components/layout/Sidebar.client.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type Props = {
  defaultOpen?: boolean; // مقدار اولیه هنگام SSR
  onClose?: () => void;
};

export default function Sidebar({ defaultOpen = true, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(defaultOpen);

  // همگام‌سازی با عرض صفحه بعد از mount (برای موبایل و دسکتاپ)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOpen(window.innerWidth >= 900);
    }
  }, []);

  // بستن با دکمه Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        onClose?.();
      }
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // فوکوس روی اولین لینک بعد از باز شدن
  useEffect(() => {
    if (open && typeof window !== 'undefined') {
      const firstAnchor = containerRef.current?.querySelector('a');
      if (firstAnchor instanceof HTMLElement) {
        firstAnchor.focus();
      }
    }
  }, [open]);

  return (
    <aside
      id="app-sidebar"
      className={`app-aside ${open ? 'open' : 'closed'}`}
      ref={containerRef}
      aria-hidden={!open}
    >
      <nav className="aside-nav" aria-label="ناوبری اصلی">
        <Link href="/dashboard" className="aside-link">🏠 داشبورد</Link>
        <Link href="/products" className="aside-link">📦 محصولات</Link>
        <Link href="/warehouses" className="aside-link">🏬 انبارها</Link>
        <Link href="/sales" className="aside-link">🧾 فروش</Link>
        <Link href="/accounting" className="aside-link">💳 مالی</Link>
        <Link href="/suppliers" className="aside-link">🏷️ تأمین‌کنندگان</Link>
        <Link href="/notifications" className="aside-link">🔔 اعلان‌ها</Link>

        <hr className="aside-divider" />

        <Link href="/settings" className="aside-link">⚙️ تنظیمات</Link>
        <Link href="/help" className="aside-link">❓ راهنما</Link>
      </nav>
    </aside>
  );
}

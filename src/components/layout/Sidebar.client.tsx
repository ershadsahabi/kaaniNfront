// src/components/layout/Sidebar.client.tsx
'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

type Props = {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  // close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // focus first link when opened (mobile)
useEffect(() => {
  if (open && typeof window !== 'undefined') {
    const firstAnchor = containerRef.current?.querySelector('a')
    if (firstAnchor instanceof HTMLElement) {
      firstAnchor.focus()
    }
  }
}, [open])


  return (
    <aside
      id="app-sidebar"
      className="app-aside"
      ref={containerRef}
      aria-hidden={!open && typeof window !== 'undefined' && window.innerWidth < 900}
    >
      <nav className="aside-nav" aria-label="ناوبری اصلی">
        <Link href="/dashboard" className="aside-link">🏠 داشبورد</Link>
        <Link href="/products" className="aside-link">📦 محصولات</Link>
        <Link href="/warehouses" className="aside-link">🏬 انبارها</Link>
        <Link href="/sales" className="aside-link">🧾 فروش</Link>
        <Link href="/accounting" className="aside-link">💳 مالی</Link>
        <Link href="/suppliers" className="aside-link">🏷️ تأمین‌کنندگان</Link>
        <Link href="/notifications" className="aside-link">🔔 اعلان‌ها</Link>

        <hr style={{ margin: '8px 0', border: 'none', height: 1, background: 'rgba(0,0,0,0.04)' }} />

        <Link href="/settings" className="aside-link">⚙️ تنظیمات</Link>
        <Link href="/help" className="aside-link">❓ راهنما</Link>
      </nav>
    </aside>
  )
}

// src/components/layout/Header.client.tsx
'use client'

import React from 'react'
import Link from 'next/link'

type Props = {
  onToggleSidebar: () => void
  sidebarOpen: boolean
}

export default function Header({ onToggleSidebar, sidebarOpen }: Props) {
  return (
    <header className="app-header" role="banner">
      <div className="header-inner container">
        {/* hamburger (mobile) */}
        <button
          className="icon-button mobile-only"
          aria-label={sidebarOpen ? 'بستن منو' : 'باز کردن منو'}
          aria-expanded={sidebarOpen}
          aria-controls="app-sidebar"
          onClick={onToggleSidebar}
        >
          <span style={{ fontSize: 20 }}>{sidebarOpen ? '✕' : '☰'}</span>
        </button>

        {/* brand */}
        <Link href="/" className="brand" aria-label="خانه">
          <span className="logo">ER</span>
          <span className="desktop-only">ERP System</span>
        </Link>

        {/* search: on desktop shows inline; on mobile still visible but compact */}
        <div className="header-search">
          <form role="search" action="/search" method="get">
            <input
              name="q"
              type="search"
              placeholder="جستجوی محصول، کد، دسته..."
              aria-label="جستجو"
            />
          </form>
        </div>

        {/* actions */}
        <div className="header-actions">
          <button className="icon-button" title="اعلان‌ها" aria-label="اعلان‌ها">
            🔔
          </button>

          <Link href="/profile" className="profile" aria-label="پروفایل">
            <span className="avatar" aria-hidden>ع</span>
            <span className="desktop-only" style={{ color: 'var(--muted-text)', fontSize: 14 }}>
              حساب من
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

// src/components/layout/Footer.tsx
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="app-footer" role="contentinfo">
      <div className="footer-inner">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Link href="/" className="brand" style={{ textDecoration: 'none' }}>
            <span className="logo" style={{ width: 28, height: 28 }}>ER</span>
            <span style={{ marginInlineStart: 8, fontWeight: 700 }}>ERP System</span>
          </Link>
          <div style={{ color: 'var(--muted-text)', fontSize: 14 }}>
            © {year} تمامی حقوق محفوظ است.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 28 }}>
          <div style={{ minWidth: 140 }}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>لینک‌ها</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Link href="/about">درباره</Link>
              <Link href="/contact">تماس</Link>
              <Link href="/privacy">حریم خصوصی</Link>
            </div>
          </div>

          <div style={{ minWidth: 200 }}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>تماس</div>
            <div style={{ color: 'var(--muted-text)', fontSize: 14 }}>
              تلفن: ۰۲۱-۱۲۳۴۵۶<br/>
              ایمیل: info@example.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

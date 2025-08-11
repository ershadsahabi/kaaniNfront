// src/app/layout.tsx
import './globals.css'
import React from 'react'
import LayoutShell from '@/components/layout/LayoutShell.client' // <-- client wrapper

export const metadata = {
  title: 'ERP System',
  description: 'سیستم مدیریت عمده‌فروشی',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // این فایل یک Server Component است و فقط یک client wrapper را ایمپورت می‌کند.
  return (
    <html lang="fa" dir="rtl">
      <body>
        <LayoutShell>
          {children}
        </LayoutShell>
      </body>
    </html>
  )
}

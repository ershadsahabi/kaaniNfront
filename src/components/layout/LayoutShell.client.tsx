// src/components/layout/LayoutShell.client.tsx
'use client'

import React, { useState } from 'react'
import Header from './Header.client'
import Sidebar from './Sidebar.client'
import Footer from './Footer' // Footer یک Server Component است (stateless)

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">پرش به محتوا</a>

      {/* Header receives toggle handler */}
      <Header onToggleSidebar={() => setSidebarOpen(s => !s)} sidebarOpen={sidebarOpen} />

      <div className={`app-layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main id="main" className="app-main" tabIndex={-1}>
          {children}
        </main>
      </div>

      <Footer />

      {/* backdrop only for mobile overlay */}
      {sidebarOpen && <div className="backdrop" onClick={() => setSidebarOpen(false)} aria-hidden />}
    </div>
  )
}

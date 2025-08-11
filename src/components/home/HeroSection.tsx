// src/components/home/HeroSection.tsx (Server)
import React from 'react'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>به سیستم مدیریت ERP خوش آمدید</h1>
        <p>مدیریت کامل محصولات، انبارها و فروش از یک مکان</p>
        <a href="/products" className="hero-btn">مشاهده محصولات</a>
      </div>
    </section>
  )
}

// src/hooks/useProducts.tsx  (client hook)
'use client'
import { useEffect, useState } from 'react'
import api from '@/lib/apiClient'

export default function useProducts() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    api.get('/products/')
      .then(r => mounted && setData(r.data))
      .catch(() => {})
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  return { data, loading }
}

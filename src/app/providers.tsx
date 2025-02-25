'use client'

import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className='flex flex-col justify-between min-h-screen'>
      {children}
    </NextUIProvider>
  )
}
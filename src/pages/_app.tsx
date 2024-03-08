import '@/styles/globals.css'
import BaseLayout from '@/components/Layouts/BaseLayout'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react'
import { AnimatePresence } from 'framer-motion'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <div className={roboto.className}>
        <BaseLayout>
          <AnimatePresence mode='wait' initial={false}>
            <Component {...pageProps} />
          </AnimatePresence>
        </BaseLayout>
      </div>
    </NextUIProvider>
  )
}

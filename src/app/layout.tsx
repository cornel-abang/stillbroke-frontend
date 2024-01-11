import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'
import Footer from '../layouts/general/footer'
import Header from '../layouts/general/header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Stillbroke',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

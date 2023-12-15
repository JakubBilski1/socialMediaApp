import Header from '@/components/layout/Header'
import '../styles/globals.css'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl-PL" className='h-full'>
      <head>
      </head>
      <body className='flex h-full'>
        <div className="flex flex-col h-full w-1/4 justify-between fixed">
          <Navbar />
          <Footer />
        </div>
        <div className='w-1/4'/>
        <div className="flex flex-col gap-16 h-full w-3/4">
          <Header />
          <div />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}

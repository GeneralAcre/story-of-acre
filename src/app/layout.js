import { VT323, Lato } from 'next/font/google'
import './globals.css';
import ClientLayout from './ClientComponent/page';

const vt323 = VT323({
  variable: '--font-vt323',
  subsets: ['latin'],
  weight: '400',
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${vt323.variable} ${lato.variable}`}>
      <body className="bg-black text-white font-vt323">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

// Optional: export for use in other files
export { lato }

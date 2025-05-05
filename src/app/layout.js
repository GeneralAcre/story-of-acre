import './globals.css';
import { VT323 } from 'next/font/google';
import Menubar from './Menubar/page';

const vt323 = VT323({
  variable: '--font-vt323',
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} bg-black text-white`}>
        {children}
        <Menubar/>
      </body>
    </html>
  );
}
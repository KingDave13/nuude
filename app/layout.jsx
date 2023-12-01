import React from 'react';
import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import NavbarAdmin from '@components/NavbarAdmin';
import Sidebar from '@components/Sidebar';

export const metadata = {
  title: "Nuude!",
  description: "The world's most exclusive members-only club!"
};

const RootLayout = ({ children }) => {
  const isClient = typeof window !== 'undefined';
  const isAdminRoute = isClient && window.location.pathname.startsWith('/admin');

  return (
    <html lang='en'>
      <body>
        <main className='bg-primary'>
          {isAdminRoute ? <NavbarAdmin /> : <Navbar />}
          {isAdminRoute ? <Sidebar /> : ''}
          {children}
          {isAdminRoute ? <Sidebar /> : <Footer />}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

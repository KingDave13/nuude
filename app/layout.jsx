import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export const metadata = {
    title: "Nuude",
    description: "The world's most exclusive members-only club!"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <main className='font-manierRegular'>
                <Navbar />
                {children}
                <Footer />
            </main>
        </body>
    </html>
  )
};

export default RootLayout;
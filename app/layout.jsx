import '@styles/globals.css';
import Navbar from '@components/Navbar';

export const metadata = {
    title: "Nuude",
    description: "The world's most exclusive members-only club!"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <main className='app'>
                <Navbar />
                {children}
            </main>
        </body>
    </html>
  )
};

export default RootLayout;
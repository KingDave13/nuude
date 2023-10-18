import '@styles/globals.css';

export const metadata = {
    title: "Nuude",
    description: "The world's most exclusive members-only club!"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
};

export default RootLayout;
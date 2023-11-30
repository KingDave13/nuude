import RootLayout from '@app/layout';
import AdminLayout from '@app/AdminLayout';

function MyApp({ Component, pageProps, router }) {
 
  const isAdminPage = router.pathname.startsWith('/admin');

  const getLayout = (page) => {
    if (isAdminPage) {
      return <AdminLayout>{page}</AdminLayout>;
    }

    return <RootLayout>{page}</RootLayout>;
  };

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

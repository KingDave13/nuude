
import '@styles/globals.css';
import NavbarAdmin from '@components/NavbarAdmin';
import Sidebar from '@components/Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className='bg-primary'>
        <NavbarAdmin />
        <Sidebar />
        {children}
    </div> 
  )
};

export default AdminLayout;
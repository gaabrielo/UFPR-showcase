import { Outlet } from 'react-router';
import Footer from '~/components/footer';
import Header from '~/components/header';

export default function Layout() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

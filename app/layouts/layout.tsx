import { Outlet } from 'react-router';
import Footer from '~/components/footer';
import Header from '~/components/header';

export default function Layout() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <footer className="mt-auto mb-0">
        <Footer />
      </footer>
    </div>
  );
}

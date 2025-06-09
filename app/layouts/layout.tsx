import { Outlet } from 'react-router';
import { AppSidebar } from '~/components/app-sidebar';
import Footer from '~/components/footer';
import Header from '~/components/header';
import { SidebarProvider } from '~/components/ui/sidebar';

export default function Layout() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="w-full flex flex-col min-h-screen">
        <Header />
        <Outlet />
        <footer className="mt-auto mb-0">
          <Footer />
        </footer>
      </main>
    </SidebarProvider>
  );
}

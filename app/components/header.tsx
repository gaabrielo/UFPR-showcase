import { SquircleIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import { LanguageSwitcher } from '~/components/language-switcher';
import { SidebarTrigger } from '~/components/ui/sidebar';
import { getNavItems } from '~/lib/utils';

export default function Header() {
  const { t } = useTranslation();
  const navItems = getNavItems(t);

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <SquircleIcon className="w-6 h-6 fill-gray-800 text-gray-800" />
            <span className="text-lg font-semibold text-gray-900">
              {t('meta.title')}
            </span>
          </div>

          <SidebarTrigger className="md:hidden" />

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className="text-gray-600 hover:text-gray-900 transition-colors flex gap-2 items-center justify-center"
              >
                {/* <item.icon className="size-3.5" /> */}
                <span>{item.title}</span>
              </NavLink>
            ))}

            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}

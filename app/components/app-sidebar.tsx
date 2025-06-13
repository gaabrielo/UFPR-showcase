import {
  FolderOpenIcon,
  Home,
  NewspaperIcon,
  SendIcon,
  UsersIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import { LanguageSwitcher } from '~/components/language-switcher';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '~/components/ui/sidebar';
import { getNavItems } from '~/lib/utils';

// Menu items.
// export const navItems = [
//   {
//     title: 'Sobre',
//     url: '/',
//     icon: Home,
//   },
//   {
//     title: 'Projetos',
//     url: '/#projects',
//     icon: FolderOpenIcon,
//   },
//   {
//     title: 'Integrantes',
//     url: '/#people',
//     icon: UsersIcon,
//   },
//   {
//     title: 'Publicações',
//     url: '/publishing',
//     icon: NewspaperIcon,
//   },
//   {
//     title: 'Contato',
//     url: '/contact',
//     icon: SendIcon,
//   },
// ];

export function AppSidebar() {
  const { t } = useTranslation();
  const navItems = getNavItems(t);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="h-full">
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarSeparator className="mt-2 mb-2" />
          {/* <SidebarGroupLabel className="mt-auto mb-0">
            Traduzir
          </SidebarGroupLabel> */}
          <SidebarGroupContent className="mt-auto mb-0">
            <LanguageSwitcher fullWidth />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

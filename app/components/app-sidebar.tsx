import {
  Calendar,
  FolderOpenIcon,
  Home,
  Inbox,
  MessageSquareIcon,
  MessageSquareReplyIcon,
  MessageSquareShareIcon,
  NewspaperIcon,
  Search,
  SendIcon,
  Settings,
  UsersIcon,
  UsersRoundIcon,
} from 'lucide-react';
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

// Menu items.
export const navItems = [
  {
    title: 'Sobre',
    url: '/',
    icon: Home,
  },
  {
    title: 'Projetos',
    url: '/#projects',
    icon: FolderOpenIcon,
  },
  {
    title: 'Integrantes',
    url: '/#people',
    icon: UsersIcon,
  },
  {
    title: 'Publicações',
    url: '/publishing',
    icon: NewspaperIcon,
  },
  {
    title: 'Contato',
    url: '/contact',
    icon: MessageSquareIcon,
  },
];

export function AppSidebar() {
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
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
            <LanguageSwitcher
              fit={false}
              options={[
                {
                  name: 'Português',
                  logo: '/images/flags/pt-br.png',
                },
                {
                  name: 'Inglês',
                  logo: '/images/flags/en-us.png',
                },
                {
                  name: 'Espanhol',
                  logo: '/images/flags/es-es.png',
                },
              ]}
            />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

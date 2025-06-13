import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import {
  Home,
  FolderOpenIcon,
  UsersIcon,
  NewspaperIcon,
  SendIcon,
} from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getNavItems = (t: Function) => [
  {
    title: t('nav.about'), // <-- Use a função t com a chave
    url: '/',
    icon: Home,
  },
  {
    title: t('nav.projects'),
    url: '/#projects',
    icon: FolderOpenIcon,
  },
  {
    title: t('nav.people'),
    url: '/#people',
    icon: UsersIcon,
  },
  {
    title: t('nav.publishing'),
    url: '/publishing',
    icon: NewspaperIcon,
  },
  {
    title: t('nav.contact'),
    url: '/contact',
    icon: SendIcon,
  },
];

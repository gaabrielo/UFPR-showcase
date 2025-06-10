'use client';

import * as React from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { useLanguage, type Language } from '~/hooks/use-language';

export function LanguageSwitcher({
  fullWidth = false,
}: {
  fullWidth?: boolean;
}) {
  const { language, changeLanguage } = useLanguage();

  const options = [
    {
      name: 'Português',
      value: 'pt-BR' as Language,
      logo: '/images/flags/pt-br.png',
    },
    {
      name: 'English',
      value: 'en-US' as Language,
      logo: '/images/flags/en-us.png',
    },
    {
      name: 'Español',
      value: 'es-ES' as Language,
      logo: '/images/flags/es-es.png',
    },
  ];

  const currentOption =
    options.find((opt) => opt.value === language) || options[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'p-1.5! cursor-pointer',
            fullWidth ? 'w-full' : 'w-fit'
          )}
        >
          <div className="bg-transparent flex size-5 items-center justify-center rounded-md">
            <img
              src={currentOption.logo}
              alt={currentOption.name}
              className="size-4 shrink-0"
            />
          </div>
          {fullWidth && (
            <span className="truncate font-medium">{currentOption.name}</span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48 rounded-lg"
        align="end"
        side="bottom"
        sideOffset={4}
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => changeLanguage(option.value)}
            className="gap-2 p-2"
          >
            <div className="flex size-6 items-center justify-center rounded-xs border">
              <img
                src={option.logo}
                alt={option.name}
                className="size-4 shrink-0"
              />
            </div>
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

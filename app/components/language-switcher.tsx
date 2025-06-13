'use client';

import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';

export function LanguageSwitcher({
  fullWidth = false,
}: {
  fullWidth?: boolean;
}) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (newLanguage: string) => {
    console.log('Changing language to:', newLanguage);
    i18n.changeLanguage(newLanguage);

    // Update URL with new language parameter
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('lng', newLanguage);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const options = [
    {
      name: 'Português',
      value: 'pt',
      logo: '/images/flags/pt-br.png',
    },
    {
      name: 'Español',
      value: 'es',
      logo: '/images/flags/es-es.png',
    },
    {
      name: 'English',
      value: 'en',
      logo: '/images/flags/en-us.png',
    },
  ];

  const currentOption =
    options.find((opt) => opt.value === i18n.language) || options[0];

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
            <>
              <span className="truncate font-medium">{currentOption.name}</span>
              <ChevronDown className="size-4" />
            </>
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

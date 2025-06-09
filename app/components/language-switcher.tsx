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

export function LanguageSwitcher({
  options,
}: {
  options: {
    name: string;
    logo: string;
  }[];
}) {
  const [activeTeam, setActiveTeam] = React.useState(options[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="w-fit px-1.5" variant="outline">
          <div className="bg-transparent text-primary flex aspect-square size-5 items-center justify-center rounded-md">
            <img
              src={activeTeam.logo}
              alt={activeTeam.name}
              className="size-5"
            />
          </div>
          {/* <span className="truncate font-medium">{activeTeam.name}</span> */}
          <ChevronDown className="opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48 rounded-lg"
        align="end"
        side="bottom"
        sideOffset={4}
      >
        {/* <DropdownMenuLabel className="text-muted-foreground text-xs">
          Traduzir
        </DropdownMenuLabel> */}
        {options.map((option, index) => (
          <DropdownMenuItem
            key={option.name}
            onClick={() => setActiveTeam(option)}
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
            {/* <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        ))}
        {/* <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 p-2">
          <div className="bg-background flex size-6 items-center justify-center rounded-md border">
            <Plus className="size-4" />
          </div>
          <div className="text-muted-foreground font-medium">Add team</div>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

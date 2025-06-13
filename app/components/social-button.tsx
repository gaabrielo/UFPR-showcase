import { InstagramIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandGithub,
} from '@tabler/icons-react';

export function SocialButton({
  icon,
  href,
  label,
}: {
  icon: string;
  href: string;
  label: string;
}) {
  const icons = {
    instagram: IconBrandInstagram,
    facebook: IconBrandFacebook,
    twitter: IconBrandTwitter,
    linkedin: IconBrandLinkedin,
    youtube: IconBrandYoutube,
    github: IconBrandGithub,
  };
  const Icon = icons[icon as keyof typeof icons];

  if (Icon) {
    return (
      <Button variant="outline" size="icon">
        <Icon />
      </Button>
    );
  } else {
    return null;
  }
}

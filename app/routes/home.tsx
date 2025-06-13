import type { Route } from '.react-router/types/app/routes/+types/home';

import { Hero } from '~/features/home/hero';
import { CoreValues } from '~/features/home/core-values';
import { FeaturedProjects } from '~/features/home/featured-projects';
import { Professors } from '~/features/home/professors';
import { Students } from '~/features/home/students';
import { getInstance } from '~/middleware/i18next';
import { data, type unstable_RouterContextProvider } from 'react-router';
// import { ContactForm } from '~/components/contact-form';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'UFPR Research Group Showcase' },
    { name: 'description', content: 'Welcome to our website!' },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  let i18n = getInstance(context as unknown as unstable_RouterContextProvider);
  return data({ title: i18n.t('title'), description: i18n.t('description') });
}
export default function Index() {
  return (
    <div>
      <Hero />
      <CoreValues />
      <FeaturedProjects />
      <Professors />
      <Students />
      {/* <ContactForm /> */}
    </div>
  );
}

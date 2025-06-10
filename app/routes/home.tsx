import { FeaturedProjects } from '~/features/home/featured-projects';
import { Professors } from '~/features/home/professors';
import { Students } from '~/features/home/students';
import { ContactForm } from '~/components/contact-form';
import { useLanguage } from '~/hooks/use-language';
import { Hero } from '~/features/home/hero';
import { CoreValues } from '~/features/home/core-values';

export default function Index() {
  const { t } = useLanguage();

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

import { useTranslation } from 'react-i18next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { useData } from '~/hooks/use-data';
import { cn } from '~/lib/utils';

export function FeaturedProjects() {
  const { t } = useTranslation('translation', { keyPrefix: 'projects' });
  const { getData } = useData();

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getData('projects.list').map((project: any, index: number) => (
            <Card key={index} className="h-full pt-0 overflow-hidden">
              <CardHeader
                className={cn('h-48 bg-gradient-to-br', project.gradient)}
              ></CardHeader>
              <CardContent>
                <CardTitle className="mb-4">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                {/* <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t('featuredProjects.technologies')}
                    </h4>
                    <p>{project.technologies}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t('featuredProjects.team')}
                    </h4>
                    <p>{project.team}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t('featuredProjects.results')}
                    </h4>
                    <p>{project.results}</p>
                  </div>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

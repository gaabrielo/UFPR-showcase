import { Button } from '~/components/ui/button';
import type { Route } from './+types/home';
import { Card, CardContent } from '~/components/ui/card';
import { BookOpen, Target, Users } from 'lucide-react';
import { Avatar, AvatarImage } from '~/components/ui/avatar';

import { useLanguage } from '~/hooks/use-language';
import { FeaturedProjects } from '~/features/home/featured-projects';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl overflow-hidden h-[50vh] flex items-center justify-center">
            <video
              src={t('hero.video')}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-teal-700/50" />
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {t('hero.title')}
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mt-4">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {t('coreValues.values').map((value: any, index: number) => {
              const icons = {
                BookOpen,
                Users,
                Target,
              };
              const Icon = icons[value.icon as keyof typeof icons];

              return (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    {Icon && <Icon className="w-12 h-12 text-teal-600 mb-4" />}
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Research Professors */}
      <section id="people" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {t('professors.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t('professors.list').map((professor: any) => (
              <Card
                key={professor.id}
                className="text-center border-0 shadow-sm"
              >
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 border mx-auto mb-4">
                    <AvatarImage
                      className="object-cover"
                      src={professor.image}
                    />
                  </Avatar>

                  <h3 className="text-xl font-semibold mb-2">
                    {professor.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{professor.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Researchers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {t('students.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t('students.list').map((student: any) => (
              <Card key={student.id} className="text-center border-0 shadow-sm">
                <CardContent className="p-6">
                  <Avatar className="w-16 h-16 border mx-auto mb-4">
                    <AvatarImage
                      className="object-cover object-top"
                      src={student.image}
                    />
                  </Avatar>

                  <h4 className="font-semibold mb-1">{student.name}</h4>
                  <p className="text-gray-600 text-sm">{student.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

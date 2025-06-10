import { BookOpen, Target, Users } from 'lucide-react';
import { useLanguage } from '~/hooks/use-language';

export function CoreValues() {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t('coreValues.values').map((value: any, index: number) => {
            const icons = {
              BookOpen,
              Users,
              Target,
            };
            const Icon = icons[value.icon as keyof typeof icons];

            return (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                {Icon && <Icon className="w-12 h-12 text-teal-600 mb-6" />}

                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

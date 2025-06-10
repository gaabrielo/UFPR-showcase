import { Avatar, AvatarImage } from '~/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { useLanguage } from '~/hooks/use-language';

export function Professors() {
  const { t } = useLanguage();

  return (
    <section id="people" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {t('professors.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t('professors.list').map((professor: any) => (
            <Card key={professor.id} className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <Avatar className="w-20 h-20 border mx-auto mb-4">
                  <AvatarImage className="object-cover" src={professor.image} />
                </Avatar>

                <h3 className="text-xl font-semibold mb-2">{professor.name}</h3>
                <p className="text-gray-600 text-sm">{professor.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

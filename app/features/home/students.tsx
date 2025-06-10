import { Avatar, AvatarImage } from '~/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { useLanguage } from '~/hooks/use-language';

export function Students() {
  const { t } = useLanguage();

  return (
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
  );
}

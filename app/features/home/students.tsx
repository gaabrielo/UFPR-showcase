import { Avatar, AvatarImage } from '~/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { useData } from '~/hooks/use-data';
import { useEffect, useRef, useState } from 'react';
import { animate } from 'motion';
import { useTranslation } from 'react-i18next';

export function Students() {
  const { getData } = useData();
  const { t } = useTranslation('translation', { keyPrefix: 'students' });

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !cardsRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - containerRect.top) /
            (viewportHeight + containerRect.height)
        )
      );

      const maxScroll =
        cardsRef.current.scrollWidth - containerRef.current.clientWidth;
      const newX = -maxScroll * scrollProgress;

      animate(
        cardsRef.current,
        { x: newX },
        {
          type: 'spring',
          stiffness: 100,
          damping: 30,
          mass: 1,
        }
      );
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log('STUDENTS => ', getData('students.list'));

  return (
    <section className="py-16 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('title')}</h2>
        <div ref={cardsRef} className="flex gap-6 w-max">
          {getData('students.list').map((student: any) => (
            <Card
              key={student.id}
              className="text-center border-0 shadow-sm w-1/5"
            >
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

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
import { animate, useScroll } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Professors() {
  const { getData } = useData();
  const { t } = useTranslation('translation', { keyPrefix: 'professors' });
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

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

  return (
    <section
      className="py-16 overflow-hidden bg-gray-50"
      ref={containerRef}
      id="people"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('title')}</h2>
        <div ref={cardsRef} className="flex gap-6 w-max">
          {getData('professors.list').map((professor: any) => (
            <Card
              key={professor.id}
              className="text-center border-0 shadow-sm w-1/3"
            >
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

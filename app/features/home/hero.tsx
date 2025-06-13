import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation('translation', { keyPrefix: 'hero' });

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl overflow-hidden h-[50vh] flex items-center justify-center">
            {/* <div className="absolute inset-0 z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-white">
                {t('hero.title')}
              </h2>
              <p className="text-gray-50 max-w-2xl mt-4 mb-12 text-center text-lg">
                {t('hero.description')}
              </p>

              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  {t('hero.contactButton')}
                </a>
                <a
                  href="#projects"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  {t('hero.projectsButton')}
                </a>
              </div>
            </div> */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-teal-700/50" />

            <video
              src="/videos/cover-4k.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">{t('title')}</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mt-4">{t('description')}</p>
        </div>
      </section>

      {/* <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8">{t('hero.description')}</p>
            <div className="flex justify-center gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('hero.contactButton')}
              </a>
              <a
                href="#projects"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {t('hero.projectsButton')}
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

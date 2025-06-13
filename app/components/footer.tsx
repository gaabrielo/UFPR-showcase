import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('nav.contact')}
            </a>
            <a
              href="#privacy"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('nav.politicPrivacy')}
            </a>
            <a
              href="#terms"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('nav.serviceTerms')}
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} © Universidade Federal do Paraná.{' '}
            {t('meta.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}

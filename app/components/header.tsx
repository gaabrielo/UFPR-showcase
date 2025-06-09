import { CommandIcon, Squircle, SquircleIcon } from 'lucide-react';
import { LanguageSwitcher } from '~/components/language-switcher';

export default function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <SquircleIcon className="w-6 h-6 fill-gray-800 text-gray-800" />
            <span className="text-lg font-semibold text-gray-900">
              Grupo de Pesquisa e Estudos Científicos da UFPR
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sobre
            </a>
            <a
              href="/#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projetos
            </a>
            <a
              href="/#people"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Integrantes
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Publicações
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contato
            </a>
            {/* <Button className="bg-blue-600 hover:bg-blue-700">Join Us</Button> */}
            <LanguageSwitcher
              options={[
                {
                  name: 'Português',
                  logo: '/images/flags/pt-br.png',
                },
                {
                  name: 'Inglês',
                  logo: '/images/flags/en-us.png',
                },
                {
                  name: 'Espanhol',
                  logo: '/images/flags/es-es.png',
                },
              ]}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}

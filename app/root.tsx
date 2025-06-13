import {
  data,
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import {
  getLocale,
  i18nextMiddleware,
  localeCookie,
} from '~/middleware/i18next';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from 'remix-i18next/react';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export const unstable_middleware = [i18nextMiddleware];

export async function loader({ request, context }: Route.LoaderArgs) {
  // First try to get the language from the cookie
  const cookieHeader = request.headers.get('Cookie');
  const cookieValue = await localeCookie.parse(cookieHeader);

  // Then check URL parameter
  const url = new URL(request.url);
  const urlLocale = url.searchParams.get('lng');

  // Get the detected locale from context
  let detectedLocale = getLocale(context);

  // Determine the final locale:
  // 1. Use URL parameter if it's a supported language
  // 2. Otherwise use the cookie value if it exists
  // 3. Finally fallback to the detected locale
  const finalLocale =
    urlLocale && ['pt', 'es', 'en'].includes(urlLocale)
      ? urlLocale
      : cookieValue && ['pt', 'es', 'en'].includes(cookieValue)
      ? cookieValue
      : detectedLocale;

  return data(
    { locale: finalLocale, error: request.headers.get('error') },
    { headers: { 'Set-Cookie': await localeCookie.serialize(finalLocale) } }
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  let { i18n } = useTranslation();

  return (
    <html lang={i18n.language} dir={i18n.dir(i18n.language)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App({ loaderData }: Route.ComponentProps) {
  const { locale, error } = loaderData;
  if (error) console.log('error', error);
  useChangeLanguage(locale);
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

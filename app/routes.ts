import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('layouts/layout.tsx', [
    index('routes/home.tsx'),
    route('/contact', 'routes/contact.tsx'),
    route('/publishing', 'routes/publishing.tsx'),
  ]),
  route('api/locales/:lng/:ns', 'routes/locales.ts'),
] satisfies RouteConfig;

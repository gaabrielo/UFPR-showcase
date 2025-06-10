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
    route('/old', 'routes/home_old.tsx'),
  ]),
] satisfies RouteConfig;

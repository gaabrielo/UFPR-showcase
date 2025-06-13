import type { Config } from '@react-router/dev/config';
import { vercelPreset } from "@vercel/react-router/vite";
import 'react-router';

declare module 'react-router' {
  interface Future {
    unstable_middleware: true;
  }
}

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  presets: [vercelPreset()],
  future: {
    unstable_middleware: true,
    unstable_optimizeDeps: false,
    unstable_splitRouteModules: false,
    unstable_viteEnvironmentApi: false,
  },
} satisfies Config;

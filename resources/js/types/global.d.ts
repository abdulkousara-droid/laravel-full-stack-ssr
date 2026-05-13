import type { route as routeFn } from 'ziggy-js';
import type { Auth } from '@/types/auth';

declare module '@inertiajs/core' {
  export interface InertiaConfig {
    sharedPageProps: {
      name: string;
      auth: Auth;
      sidebarOpen: boolean;
      [key: string]: unknown;
    };
  }
}

declare global {
  // This tells TS that 'route' is available globally on the window
  var route: typeof routeFn;
}

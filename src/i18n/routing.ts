import { Locales } from '@/../messages/types';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: Object.values(Locales),
  defaultLocale: Locales.en,
});

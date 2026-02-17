import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'next/link',
              message: "Import from '@/i18n/navigation' instead",
            },
            {
              name: 'next/navigation',
              importNames: ['useRouter', 'redirect', 'usePathname', 'getPathname'],
              message: "Import from '@/i18n/navigation' instead",
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;

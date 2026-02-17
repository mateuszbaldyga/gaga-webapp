'use client';

import { APP_ROUTES } from '@/config/routes';
import Image from 'next/image';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const linkClassNames =
  'relative py-1.5 px-2  before:absolute before:inset-0 before:border before-border-white before:rounded before:opacity-0 hover:before:opacity-100 before:transition-opacity';

export function Navbar() {
  const t = useTranslations('navigation');
  const showAccentLogo = true;

  const leftNav = [
    { label: t('latest'), href: APP_ROUTES.HOME() },
    { label: t('music'), href: APP_ROUTES.MUSIC() },
    { label: t('shop'), href: APP_ROUTES.SHOP() },
    { label: t('projects'), href: APP_ROUTES.PROJECTS() },
  ];

  const rightNav = [
    { label: t('account'), href: APP_ROUTES.ACCOUNT() },
    { label: t('cart'), href: APP_ROUTES.CART() },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-navbar ">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
      >
        {t('skipToMainContent')}
      </a>

      <nav className="flex items-center justify-between h-14 px-gutter bg-background" role="navigation" aria-label="Main navigation">
        <ul className="flex gap-7">
          {leftNav.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={linkClassNames}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={APP_ROUTES.HOME()} className="absolute left-1/2 w-25 h-10.5 -translate-x-1/2">
          <Image
            src="/images/logo-white.avif"
            alt={t('logoAlt')}
            width={420}
            height={179}
            sizes="100px"
            className={clsx('absolute inset-0 transition-opacity', showAccentLogo ? 'opacity-0' : 'opacity-100')}
          />
          <Image
            src="/images/logo-accent.avif"
            alt={t('logoAlt')}
            width={420}
            height={179}
            sizes="100px"
            className={clsx('absolute inset-0 transition-opacity', showAccentLogo ? 'opacity-100' : 'opacity-0')}
          />
        </Link>

        <ul className="flex gap-7">
          {rightNav.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={linkClassNames}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

'use client'; // 👈 declares SSR Client Component

import { Typography } from '@/components/ui/Typography';
import { APP_ROUTES } from '@/config/routes';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const links = [
    { label: t('helpSupport'), href: APP_ROUTES.HELP_SUPPORT() },
    { label: t('privacyPolicy'), href: APP_ROUTES.PRIVACY_POLICY() },
    { label: t('termsConditions'), href: APP_ROUTES.TERMS_CONDITIONS() },
    {
      label: t('cookies'),
      onClick: () => {
        // TODO: show cookies modal
      },
    },
    { label: t('doNotSellMyPersonalInfo'), href: APP_ROUTES.DO_NOT_SELL_MY_PERSONAL_INFO() },
    { label: t('signUpForNewsletter'), href: '/' },
  ];

  return (
    <Typography as="footer" variant="body2" className="pb-gutter container">
      <nav className="bg-black-2 flex justify-between gap-2.5 rounded-sm px-10 py-9">
        <ul className="group grid w-[60%] min-w-[400px] grid-flow-col grid-rows-3 gap-2.5">
          {links.map((item) => (
            <li key={item.label} className="flex">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={item.onClick}
                  className="transition-opacity group-hover:opacity-50 hover:opacity-100!"
                >
                  {item.label}
                </Link>
              ) : (
                <button onClick={item.onClick} className="transition-opacity group-hover:opacity-50 hover:opacity-100!">
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-auto">{t('copyright', { year: new Date().getFullYear() })}</div>
      </nav>
    </Typography>
  );
}

'use client';
import { Link } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from '@/navigation';

function SwitchLanguage() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Global');
  return (
    <Link
      className="text-sm text-white"
      href={pathname}
      locale={locale === 'ar' ? 'en' : 'ar'}
      replace
    >
      {t('language')}
    </Link>
  );
}

export default SwitchLanguage;

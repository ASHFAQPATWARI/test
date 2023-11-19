import { TLocale } from '@/types';
import { useLocale } from 'next-intl';

export default function useDirection(locale: TLocale) {
  const defaultLocale = useLocale() as TLocale;
  if (!locale) locale = defaultLocale;
  return locale === 'ar' ? 'rtl' : 'ltr';
}

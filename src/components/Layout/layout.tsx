import { PATHS } from '@/constants/routes';
import { Link } from '@/navigation';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import { PropsWithChildren } from 'react';
import SwitchLanguage from './components/switchLanguage';

function AppLayout({ children }: PropsWithChildren) {
  const t = useTranslations();
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <header className="w-full bg-primary">
          <div className="container mx-auto flex h-[100px] items-center justify-between">
            <h3 className="py-2 text-xl font-bold text-white">
              <Link href="/">QDB X | Merger & Acquisition</Link>
            </h3>
            <div className="flex items-center gap-8 text-sm text-white">
              <Link href={PATHS.HOME}>{t('Header.home')}</Link>
              <Link href={PATHS.COMPANIES}>{t('Header.myCompanies')}</Link>
              <Link href={PATHS.INTERESTS}>{t('Header.myInterest')}</Link>
              <Link href={PATHS.ADVISORS}>{t('Header.investmentAdvisor')}</Link>
              <Link href={PATHS.FAQ}>{t('Header.faq')}</Link>
            </div>
            <div className="flex items-center gap-4">
              <SwitchLanguage />
              <button className="hover:bg-yellow-dark rounded-full bg-yellow px-6 py-3 text-base font-bold text-white">
                <Link href="/signup">{t('Global.login')}</Link>
              </button>
            </div>
          </div>
        </header>

        <main className="w-full grow bg-light-gray">{children}</main>

        <footer className="container flex w-full justify-between py-6">
          <h1 className="text-primary">©2023, All right reserved.</h1>
          <div className="flex gap-3 text-primary underline">
            <a href="">{t('Footer.privacyPolicy')}</a>
            <a href="">{t('Footer.terms')}</a>
          </div>
        </footer>
      </div>
    </NextIntlClientProvider>
  );
}

export default AppLayout;

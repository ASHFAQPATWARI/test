import AppLayout from '@/components/Layout/layout';
import useDirection from '@/hooks/useDirection';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { locales } from '@/navigation';
import theme from '@/theme/themeConfig';
import { TLocale } from '@/types';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import { Almarai, Mukta } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import '../globals.css';

const mukta = Mukta({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
  adjustFontFallback: false,
});

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-secondary',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'QDB X | Merger & Acquisition',
  description: 'Businesses for Sale and  Investment Opportunities',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: {
    locale: TLocale;
  };
}) {
  if (!locales.includes(locale as any)) notFound();
  const direction = useDirection(locale);
  return (
    <html lang={locale} dir={direction}>
      <body className={`${mukta.variable} ${almarai.variable}`}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <AppLayout>{children}</AppLayout>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

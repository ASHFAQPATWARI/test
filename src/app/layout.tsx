import StyledComponentsRegistry from '@/lib/AntdRegistry';
import theme from '@/theme/themeConfig';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import { Mukta } from 'next/font/google';
import './globals.css';
import AppLayout from '@/components/Layout/layout';

const mukta = Mukta({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'QDB X | Merger & Acquisition',
  description: 'Businesses for Sale and  Investment Opportunities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mukta.variable}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <AppLayout>{children}</AppLayout>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

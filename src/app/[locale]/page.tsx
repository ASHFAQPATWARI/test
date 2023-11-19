import BackToTop from '@/components/BackToTop';
import BusinessCard from '@/components/BusinessCard';
import Container from '@/components/Container';
import { businesses } from '@/data/businesses';
import { useTranslations } from 'next-intl';
import BusinessFilters from './components/BusinessFilters';

export default function Home() {
  const t = useTranslations('Dashboard');
  return (
    <div className="container mx-auto">
      <div className="my-16">
        <h4 className="mb-10 text-3xl font-semibold text-neutral-700">
          {t('title')}
        </h4>
        <BusinessFilters />
        <Container>
          <p className="mb-4 text-sm text-neutral-500">
            Showing 1 -15 of 12345 investors. Sell or Finance your business
          </p>
          <div className="grid grid-cols-3 gap-10">
            {businesses.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </Container>
      </div>
      <BackToTop />
    </div>
  );
}

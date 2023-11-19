import BusinessCard from '@/components/BusinessCard';
import Container from '@/components/Container';
import { businesses } from '@/data/businesses';
import { useTranslations } from 'next-intl';

export default function Interests() {
  const t = useTranslations('Interests');
  return (
    <div className="container mx-auto">
      <div className="my-16">
        <h4 className="mb-10 text-3xl font-semibold text-primary">
          {t('title')}
        </h4>
        <Container>
          {/* Listing cards */}
          <div className="grid grid-cols-3 gap-10">
            {businesses.slice(0, 4).map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

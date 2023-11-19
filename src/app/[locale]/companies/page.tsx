import BusinessCard from '@/components/BusinessCard';
import Container from '@/components/Container';
import { businesses } from '@/data/businesses';
import { useTranslations } from 'next-intl';
import AddCompanyCard from './components/AddCompanyCard';
import RequestNow from './components/RequestNow';

export default function MyCompanies() {
  const t = useTranslations('MyCompanies');
  return (
    <div className="container mx-auto">
      <div className="my-16">
        <h4 className="mb-10 text-3xl font-semibold text-primary">
          {t('title')}
        </h4>
        <Container>
          {/* Need assistance header */}
          <div className="mb-6 rounded-lg bg-primary-700 p-6">
            <div className="flex w-full items-center justify-center gap-6">
              <p className="text-2xl font-medium text-white">
                {t('needAssistance')}
              </p>
              <RequestNow />
            </div>
          </div>

          {/* Listing cards */}
          <div className="grid grid-cols-3 gap-10">
            {businesses.slice(0, 3).map(business => (
              <BusinessCard isEdit key={business.id} business={business} />
            ))}
            <AddCompanyCard />
          </div>
        </Container>
      </div>
    </div>
  );
}

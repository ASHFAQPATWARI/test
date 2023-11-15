import BusinessCard, { IBusiness } from '@/components/BusinessCard';
import Card from '@/components/Card';

const businesses: IBusiness[] = [
  {
    title: 'Fast food restaurant serving 30 customers a day is up for sale.',
    id: '17647647',
    date: '3 days ago',
    salesRunRate: 'QAR 1.8 million',
    margin: '30%',
    saleRate: 'QAR 800,000',
  },
  {
    title: 'Fast food restaurant serving 30 customers a day is up for sale.',
    id: '2975980',
    date: '3 days ago',
    salesRunRate: '100%',
    margin: '100%',
    saleRate: 'QAR 320,000',
  },
  {
    title: 'Fast food restaurant serving 30 customers a day is up for sale.',
    id: '2975980',
    date: '3 days ago',
    salesRunRate: '100%',
    margin: '100%',
    saleRate: 'QAR 320,000',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="my-16">
        <h4 className="text-neutral-700 mb-10 text-3xl font-semibold">
          Businesses for Sale and Investment Opportunities
        </h4>
        <Card className="mb-10 flex h-[134px] items-center">
          <div className="grid w-full grid-cols-4 divide-x text-center">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
          </div>
        </Card>
        <Card>
          <p className="text-neutral-500 mb-4 text-sm">
            Showing 1 -15 of 12345 investors. Sell or Finance your business
          </p>
          <div className="grid grid-cols-3 gap-10">
            {businesses.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

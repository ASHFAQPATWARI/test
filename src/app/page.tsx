import BusinessCard, { IBusiness } from '@/components/BusinessCard';
import Container from '@/components/Container';

const businesses: IBusiness[] = [
  {
    title: 'ABC Tech Solutions',
    id: '1a2b3c4d5e6f',
    createdOn: '2023-11-15T08:00:00.000Z',
    ebitdaValue: 2500000.75,
    ebitdaValueFormatted: 'QAR 2,500,000.75',
    saleRate: 1200000.5,
    saleRateFormatted: 'QAR 1,200,000.50',
    annualSales: 5000000,
    annualSalesFormatted: 'QAR 5,000,000',
    establishmentYear: 2010,
    industry: [{ name: 'Technology', id: '1' }],
    location: [{ name: 'Doha', id: '1' }],
  },
  {
    title: 'Financial Insights LLC',
    id: 'a1b2c3d4e5f6',
    createdOn: '2023-11-05T10:30:00.000Z',
    ebitdaValue: 1800000.25,
    ebitdaValueFormatted: 'QAR 1,800,000.25',
    saleRate: 900000.75,
    saleRateFormatted: 'QAR 900,000.75',
    annualSales: 3000000.5,
    annualSalesFormatted: 'QAR 3,000,000.50',
    establishmentYear: 2005,
    industry: [{ name: 'Finance', id: '2' }],
    location: [{ name: 'Doha', id: '1' }],
  },
  {
    title: 'MediHealth Solutions',
    id: 'x9y8z7w6v5u4',
    createdOn: '2023-10-15T15:45:00.000Z',
    ebitdaValue: 3500000,
    ebitdaValueFormatted: 'QAR 3,500,000',
    saleRate: 1500000.5,
    saleRateFormatted: 'QAR 1,500,000.50',
    annualSales: 7000000.75,
    annualSalesFormatted: 'QAR 7,000,000.75',
    establishmentYear: 2015,
    industry: [{ name: 'Healthcare', id: '3' }],
    location: [{ name: 'Doha', id: '1' }],
  },
  {
    title: 'InnovateTech Solutions',
    id: 'q1w2e3r4t5y6',
    createdOn: '2022-05-10T12:15:00.000Z',
    ebitdaValue: 2800000.5,
    ebitdaValueFormatted: 'QAR 2,800,000.50',
    saleRate: 1300000.25,
    saleRateFormatted: 'QAR 1,300,000.25',
    annualSales: 5500000.75,
    annualSalesFormatted: 'QAR 5,500,000.75',
    establishmentYear: 2012,
    industry: [{ name: 'Technology', id: '1' }],
    location: [{ name: 'Doha', id: '1' }],
  },
  {
    title: 'GlobalFinance Solutions',
    id: 'm8n7b6v5c4x3',
    createdOn: '2023-08-03T14:20:00.000Z',
    ebitdaValue: 2100000.75,
    ebitdaValueFormatted: 'QAR 2,100,000.75',
    saleRate: 1100000.25,
    saleRateFormatted: 'QAR 1,100,000.25',
    annualSales: 4500000.5,
    annualSalesFormatted: 'QAR 4,500,000.50',
    establishmentYear: 2008,
    industry: [{ name: 'Finance', id: '2' }],
    location: [{ name: 'Doha', id: '1' }],
  },
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="my-16">
        <h4 className="mb-10 text-3xl font-semibold text-neutral-700">
          Businesses for Sale and Investment Opportunities
        </h4>
        <Container className="mb-10 flex h-[134px] items-center">
          <div className="grid w-full grid-cols-4 divide-x text-center">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
          </div>
        </Container>
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
    </div>
  );
}

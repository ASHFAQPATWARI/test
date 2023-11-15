import AdvisorCard, { IAdvisor } from '@/components/AdvisorCard';
import Card from '@/components/Card';

const advisors: IAdvisor[] = [
  {
    name: 'ABC Company',
    id: '17647647',
    email: 'abc@abc.com',
    logo: 'https://placehold.co/40x40.png',
    mobile: '01234567890',
    services: ['Portfolio management', 'Financial planning', 'Budgeting'],
  },
  {
    name: 'ABC Company',
    id: '17647647',
    email: 'abc@abc.com',
    logo: 'https://placehold.co/40x40.png',
    mobile: '01234567890',
    services: ['Portfolio management', 'Financial planning', 'Budgeting'],
  },
  {
    name: 'ABC Company',
    id: '17647647',
    email: 'abc@abc.com',
    logo: 'https://placehold.co/40x40.png',
    mobile: '01234567890',
    services: ['Portfolio management', 'Financial planning', 'Budgeting'],
  },
  {
    name: 'ABC Company',
    id: '17647647',
    email: 'abc@abc.com',
    logo: 'https://placehold.co/40x40.png',
    mobile: '01234567890',
    services: ['Portfolio management', 'Financial planning', 'Budgeting'],
  },
  {
    name: 'ABC Company',
    id: '17647647',
    email: 'abc@abc.com',
    logo: 'https://placehold.co/40x40.png',
    mobile: '01234567890',
    services: ['Portfolio management', 'Financial planning', 'Budgeting'],
  },
  {
    name: 'ABC Company',
    id: '17647647',
    email: 'abc@abc.com',
    logo: 'https://placehold.co/40x40.png',
    mobile: '01234567890',
    services: ['Portfolio management', 'Financial planning', 'Budgeting'],
  },
  {
    name: 'ABC Company',
    id: '17647647',
    email: 'abc@abc.com',
    logo: 'https://placehold.co/40x40.png',
    mobile: '01234567890',
    services: ['Portfolio management', 'Financial planning', 'Budgeting'],
  },
  {
    name: 'ABC Company',
    id: '17647647',
    email: 'abc@abc.com',
    logo: 'https://placehold.co/40x40.png',
    mobile: '01234567890',
    services: ['Portfolio management', 'Financial planning', 'Budgeting'],
  },
  {
    name: 'ABC Company',
    id: '17647647',
    email: 'abc@abc.com',
    logo: 'https://placehold.co/40x40.png',
    mobile: '01234567890',
    services: ['Portfolio management', 'Financial planning', 'Budgeting'],
  },
];

export default function Advisor() {
  return (
    <div className="container mx-auto">
      <div className="my-16">
        <h4 className="mb-10 text-3xl font-semibold text-primary">
          Investment advisor
        </h4>
        <Card>
          <div className="grid grid-cols-3 gap-6">
            {advisors.map(advisor => (
              <AdvisorCard key={advisor.id} advisor={advisor} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

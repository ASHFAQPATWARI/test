import Icons from '@/components/Icons';
import Link from '@/components/Link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';

dayjs.extend(relativeTime);

export interface IBusiness {
  title: string;
  id: string;
  createdOn: string;
  ebitdaValue: number;
  ebitdaValueFormatted: string;
  saleRate: number;
  saleRateFormatted: string;
  annualSales: number;
  annualSalesFormatted: string;
  establishmentYear: string | number;
  industry: { name: string; id: string }[];
  location: { name: string; id: string }[];
}

export interface IBusinessCardProps {
  business: IBusiness;
}

function BusinessCard({ business }: IBusinessCardProps) {
  const {
    title,
    id,
    createdOn,
    ebitdaValue,
    ebitdaValueFormatted,
    saleRate,
    saleRateFormatted,
    annualSales,
    annualSalesFormatted,
    establishmentYear,
    industry,
    location,
  } = business;
  const stats = [
    {
      title: 'Total annual sales',
      value: annualSalesFormatted,
    },
    {
      title: 'Business for sale',
      value: saleRateFormatted,
    },
    {
      title: 'EBITDA Value',
      value: ebitdaValueFormatted,
    },
    {
      title: 'Length of the business',
      value: establishmentYear,
    },
    {
      title: 'Location',
      value: location.map(e => e.name).join(', '),
    },
    {
      title: 'Industries',
      value: industry.map(e => e.name).join(', '),
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-card">
      <div className="flex gap-5 bg-lavendar px-8 py-4">
        <div className="grow">
          <p className="text-sm font-semibold text-primary">{title}</p>
        </div>
        <div>
          <Image
            src="/icons/greenTick.svg"
            alt="Checked"
            width={24}
            height={24}
            className="mt-1"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-8 py-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-start gap-2">
            <Image
              src={`/icons/business-card/bc${index + 1}.svg`}
              alt="Checked"
              width={12}
              height={12}
              priority
              className="mt-1"
            />
            <div>
              <p className="text-xs text-primary-400">{stat.title}</p>
              <p className="text-sm font-semibold text-primary">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="shadow-card-footer flex justify-between gap-4 border-t border-neutral-100 px-8 py-4">
        <TimeAgo createdOn={createdOn} />
        <Link
          className="rounded-full bg-secondary-500 px-6 py-2 text-sm font-bold text-white"
          href={`/business/${id}`}
        >
          View details
        </Link>
      </div>
    </div>
  );
}

function TimeAgo({ createdOn }: { createdOn: string }) {
  const createdDiff = dayjs().diff(createdOn, 'days');
  const textClass =
    createdDiff < 7
      ? 'text-secondary-500'
      : createdDiff < 30
        ? 'text-yellow'
        : 'text-neutral-500';
  return (
    <div className="flex items-center gap-2">
      <Icons.Timer
        type={
          createdDiff < 7 ? 'green' : createdDiff < 30 ? 'yellow' : 'neutral'
        }
      />
      <p className={`text-xs ${textClass}`}>
        Listed {createdOn && dayjs(createdOn).fromNow()}
      </p>
    </div>
  );
}

export default BusinessCard;

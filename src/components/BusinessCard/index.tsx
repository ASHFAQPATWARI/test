import Icons from '@/components/Icons';
import Link from '@/components/Link';
import { IBusiness } from '@/types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

dayjs.extend(relativeTime);

export interface IBusinessCardProps {
  business: IBusiness;
  isEdit?: boolean;
}

function BusinessCard({ business, isEdit = false }: IBusinessCardProps) {
  const {
    title,
    id,
    createdOn,
    ebitdaValueFormatted,
    saleRateFormatted,
    annualSalesFormatted,
    establishmentYear,
    industry,
    location,
  } = business;
  const t = useTranslations('Business');
  const stats = [
    {
      label: t('totalAnnualSales'),
      value: annualSalesFormatted,
    },
    {
      label: t('businessForSale'),
      value: saleRateFormatted,
    },
    {
      label: t('ebitdaValue'),
      value: ebitdaValueFormatted,
    },
    {
      label: t('length'),
      value: establishmentYear,
    },
    {
      label: t('location'),
      value: location.map(e => e.name).join(', '),
    },
    {
      label: t('industries'),
      value: industry.map(e => e.name).join(', '),
    },
  ];

  return (
    <div className="flex min-h-[310px] flex-col overflow-hidden rounded-lg bg-white shadow-card">
      <div className="flex gap-5 bg-lavendar px-8 py-4">
        <div className="grow">
          <p className="line-clamp-2 text-sm font-semibold text-primary">
            {title}
          </p>
        </div>
        <div className="shrink-0">
          <Image
            src={`/icons/${isEdit ? 'edit' : 'greenTick'}.svg`}
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
              <p className="text-xs text-primary-400">{stat.label}</p>
              <p className="text-sm font-semibold text-primary">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="shadow-card-footer mt-auto flex justify-between gap-4 border-t border-neutral-100 px-8 py-4">
        <TimeAgo createdOn={createdOn} />
        <Link
          className="rounded-full bg-secondary-500 px-6 py-2 text-sm font-bold text-white"
          href={`/business/${id}`}
          size="small"
        >
          {t(isEdit ? 'publish' : 'viewDetails')}
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

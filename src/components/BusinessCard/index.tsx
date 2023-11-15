import Link from '@/components/Link';
import Image from 'next/image';

export interface IBusiness {
  title: string;
  id: string;
  date: string;
  salesRunRate: string;
  margin: string;
  saleRate: string;
}

export interface IBusinessCardProps {
  business: IBusiness;
}

function BusinessCard({ business }: IBusinessCardProps) {
  const { title, id, date, salesRunRate, margin, saleRate } = business;
  return (
    <div className="bg-white flex flex-col overflow-hidden rounded-lg drop-shadow">
      <div className="bg-lavendar flex gap-5 px-8 py-4">
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
        <div className="flex items-start gap-2">
          <Image
            src="/icons/salerate.svg"
            alt="Checked"
            width={14}
            height={14}
            priority
            className="mt-1"
          />
          <div>
            <p className="text-sm font-semibold">Sales run rate</p>
            <p className="text-xs">{salesRunRate}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Image
            src="/icons/date.svg"
            alt="Checked"
            width={14}
            height={14}
            priority
            className="mt-1"
          />
          <div>
            <p className="text-sm font-semibold">Listed date</p>
            <p className="text-xs">{'25th November, 2023'}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Image
            src="/icons/margin.svg"
            alt="Checked"
            width={14}
            height={14}
            priority
            className="mt-1"
          />
          <div>
            <p className="text-sm font-semibold">EBITDA Margin</p>
            <p className="text-xs">{margin}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Image
            src="/icons/businessrate.svg"
            alt="Checked"
            width={14}
            height={14}
            priority
            className="mt-1"
          />
          <div>
            <p className="text-xs">Business for sale</p>
            <p className="font-bold">{saleRate}</p>
          </div>
        </div>
      </div>
      <div className="border-neutral-100 mx-8 flex justify-between gap-4 border-t py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/greenclock.svg"
            alt="Checked"
            width={14}
            height={14}
            priority
          />
          <p className="text-secondary-500 text-xs">Listed 1 month ago</p>
        </div>
        <Link
          className="bg-secondary-500 text-white rounded-full px-6 py-2 text-sm font-bold"
          href={`/business/${id}`}
        >
          View details
        </Link>
      </div>
    </div>
  );
}

export default BusinessCard;

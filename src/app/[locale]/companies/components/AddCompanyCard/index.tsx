import { PATHS } from '@/constants/routes';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AddCompanyCard() {
  const t = useTranslations('MyCompanies');
  return (
    <Link
      className="flex min-h-[310px] flex-col items-center justify-center overflow-hidden rounded-lg bg-white shadow-card"
      href={PATHS.ADDCOMPANY}
    >
      <Image
        src="/icons/addCompany.svg"
        alt="Checked"
        width={103}
        height={103}
        priority
      />
      <p className="mt-2 font-semibold text-neutral-700">{t('addCompany')}</p>
    </Link>
  );
}

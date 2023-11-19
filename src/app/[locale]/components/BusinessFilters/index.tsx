'use client';

import Container from '@/components/Container';
import { Select, Slider } from 'antd';

import { useTranslations } from 'next-intl';

const filterOption = (
  input: string,
  option?: { label: string; value: string },
) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

function BusinessFilters() {
  const t = useTranslations('Filters');

  return (
    <Container className="sticky top-0 mb-10 flex h-[134px] items-center">
      <div className="flex w-full gap-6 align-top">
        <div className="flex-1">
          <div className="flex gap-4">
            <p className="text-primary-400">{t('length')}</p>
            <p className="font-bold text-primary">1940 - 2023</p>
          </div>
          <Slider range defaultValue={[1940, 2023]} min={1940} max={2023} />
        </div>
        <div className="w-[1px] bg-neutral-200"></div>
        <div className="flex-1">
          <div className="flex gap-4">
            <p className="text-primary-400">{t('investmentSize')}</p>
            <p className="font-bold text-primary">QAR 546 - 1 million</p>
          </div>
          <Slider
            range
            defaultValue={[546, 1007080]}
            min={546}
            max={1007080}
            onChange={() => {}}
          />
        </div>
        <div className="w-[1px] bg-neutral-200"></div>
        <div className="flex-1">
          <p className="mb-3 text-primary-400">{t('location.title')}</p>
          <Select
            className="w-full max-h-8"
            showSearch
            allowClear
            mode="multiple"
            placeholder={t('location.placeholder')}
            optionFilterProp="children"
            onChange={() => {}}
            onSearch={() => {}}
            filterOption={filterOption}
            options={[
              {
                value: '21415315',
                label: 'Doha',
              },
              {
                value: '232525',
                label: 'Lusail',
              },
              {
                value: '342636',
                label: 'Pearl',
              },
              {
                value: '865986',
                label: 'Al Khor',
              },
            ]}
          />
        </div>
        <div className="w-[1px] bg-neutral-200"></div>
        <div className="flex-1">
          <p className="mb-3 text-primary-400">{t('industry.title')}</p>
          <Select
            className="w-full max-h-8"
            showSearch
            allowClear
            mode="multiple"
            placeholder={t('industry.placeholder')}
            optionFilterProp="children"
            onChange={() => {}}
            onSearch={() => {}}
            filterOption={filterOption}
            options={[
              {
                value: '21415315',
                label: 'Technology',
              },
              {
                value: '232525',
                label: 'Finance',
              },
              {
                value: '342636',
                label: 'Healthcare',
              },
              {
                value: '865986',
                label: 'Business service',
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}

export default BusinessFilters;

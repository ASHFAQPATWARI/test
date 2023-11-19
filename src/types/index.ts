export type TLocale = 'en' | 'ar';

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

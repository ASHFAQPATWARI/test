import Container from '@/components/Container';
import { useTranslations } from 'next-intl';

export default function Faq() {
  const t = useTranslations('FAQ');
  return (
    <div className="container mx-auto">
      <div className="my-16">
        <h4 className="mb-10 text-3xl font-semibold text-primary">
          {t('title')}
        </h4>
        <Container>
          <p className="mb-4 font-semibold text-primary">
            What exactly are Tags I see on a profile?
          </p>
          <p className="text-sm text-neutral-600">
            Tags are automatically created keyword phrases based on parameters
            selected on the profile, such as industry, location, transaction
            type, and so forth; there is no manual way to alter these tags.
            Search engines may be able to use these tags to search profiles
          </p>
        </Container>
      </div>
    </div>
  );
}

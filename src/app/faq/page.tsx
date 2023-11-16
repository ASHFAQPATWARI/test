import Container from '@/components/Container';

export default function Faq() {
  return (
    <div className="container mx-auto">
      <div className="my-16">
        <h4 className="mb-10 text-3xl font-semibold text-primary">
          Frequently asked question (FAQ)
        </h4>
        <Container>
          <p className='text-primary font-semibold mb-4'>What exactly are Tags I see on a profile?</p>
          <p className='text-sm text-neutral-600'>Tags are automatically created keyword phrases based on parameters selected on the profile, such as industry, location, transaction type, and so forth; there is no manual way to alter these tags. Search engines may be able to use these tags to search profiles</p>
        </Container>
      </div>
    </div>
  );
}

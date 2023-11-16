import Container from '@/components/Container';

export default function MyListings() {
  return (
    <div className="container mx-auto">
      <div className="my-16">
        <h4 className="mb-10 text-3xl font-semibold text-primary">
          My companies for sale
        </h4>
        <Container>
          <div className="bg-primary-700 rounded-lg p-6">
            <div className="flex gap-6">
              <p className="text-2xl font-medium">
                Need assistance from investment advisory ?
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

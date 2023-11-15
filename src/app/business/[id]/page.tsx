function Business({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto">
      <div className="bg-white my-16 rounded-2xl px-10 pb-10 pt-4 drop-shadow">
        <h1 className="text-3xl">Business info: {params.id}</h1>
      </div>
    </div>
  );
}

export default Business;

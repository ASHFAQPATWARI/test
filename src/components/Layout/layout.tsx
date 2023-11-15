import Link from 'next/link';

function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <header className="w-full bg-primary">
        <div className="container mx-auto flex h-[100px] items-center justify-between">
          <h3 className="text-white py-2 text-xl font-bold">
            <Link href="/">QDB X | Merger & Acquisition</Link>
          </h3>
          <div className="text-white flex items-center gap-8 text-sm">
            <Link href="/">Home</Link>
            <Link href="/mylistings">My companies for sale</Link>
            <Link href="/interests">My Interest</Link>
            <Link href="/advisors">Investment advisor</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div>
            <button className="bg-yellow text-white rounded-full px-6 py-3 text-base font-bold">
              <Link href="/signup">Login / Create an account</Link>
            </button>
          </div>
        </div>
      </header>

      <main className="bg-light-gray w-full grow">{children}</main>

      <footer className="container flex w-full justify-between py-6">
        <h1 className="text-primary">©2023, All right reserved.</h1>
        <div className="flex gap-3 text-primary underline">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;

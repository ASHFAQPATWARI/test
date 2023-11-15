import Image from 'next/image';

export interface IAdvisor {
  name: string;
  id: string;
  logo: string;
  mobile: string;
  email: string;
  services: string[];
}

export interface IAdvisorCardProps {
  advisor: IAdvisor;
}

function AdvisorCard({ advisor }: IAdvisorCardProps) {
  const { name, id, email, logo, mobile, services } = advisor;
  return (
    <div className="bg-white flex flex-col overflow-hidden rounded-lg drop-shadow">
      <div className="bg-lavendar flex items-center gap-2 px-8 py-4">
        <div>
          <Image
            src="https://placehold.co/40x40.png"
            alt="Checked"
            width={40}
            height={40}
            className="mt-1"
            priority
          />
        </div>
        <div className="grow">
          <p className="font-semibold text-primary">{name}</p>
        </div>
      </div>
      <div className="flex justify-between gap-4 px-8 py-4 text-primary">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs">Mobile number</p>
            <p className="text-sm font-semibold">{mobile}</p>
          </div>
          <div>
            <p className="text-xs">Email</p>
            <p className="text-sm font-semibold">{email}</p>
          </div>
        </div>
        <div>
          <p className="text-xs">Service offering</p>
          <ul className="ml-6 list-disc text-sm font-semibold">
            {services.map(service => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdvisorCard;

import Background from '../public/images/welcome.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <h2 className='text-center text-2xl font-bold tracking-wide my-10'>
        Welcome to Author Website
      </h2>

      <div className='p-24 flex items-center justify-center'>
        <Image src={Background} alt='' />
      </div>
    </div>
  );
}

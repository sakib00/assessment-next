import Background from '../public/images/error404.svg';
import Image from 'next/image';
export default function Custom404() {
  return (
    <div className='p-24 flex items-center justify-center'>
      <Image src={Background} alt='' />
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import * as LayoutConst from '../layout';

export default function Logo() {
  return (
    <div className="mb-[2rem]">
      <Link href="/" className="flex items-center justify-center text-primary">
        <Image
          priority
          src="/images/logo.svg"
          className="flex-none w-[50px]" 
          width={100}
          height={100}
          alt=""
        />
        <h1 className="flex-auto inline ml-[.75rem] text-[2.4rem] self-center font-semibold">{LayoutConst.siteName}</h1>
      </Link>
    </div>
  );
}

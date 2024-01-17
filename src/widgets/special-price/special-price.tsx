'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SpecialPriceProps = {
  type: 'link' | 'button';
};

export const SpecialPrice = ({ type }: SpecialPriceProps) => {
  const pathname = usePathname();

  return type === 'link' ? (
    <Link href={`${pathname}?showModal=y`}>Узнать оптовую цену</Link>
  ) : <span>123</span>;
};

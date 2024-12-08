'use client';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const links = [
  { name: 'Delivery', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Pick-Up', href: '/dashboard/pick-up', icon: DocumentDuplicateIcon },
  { name: 'Mart', href: '/dashboard/mart', icon: UserGroupIcon },
  { name: 'Shops', href: '/dashboard/shops', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-10 items-center rounded-none p-2 hover:border-b-2 hover:border-purple-600 hover:text-purple-600 gap-1",
              {
              ' text-purple-600 border-b-2 border-purple-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
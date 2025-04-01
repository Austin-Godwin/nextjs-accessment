'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { Url } from 'next/dist/shared/lib/router/router';

export default function NavLinks({ href, children }: { href: Url; children: React.ReactNode }) {
    const pathName = usePathname();
    return (
        <Link
            href={href}
            className={clsx('text-blue-700',
                { 'text-blue-800': pathName === href }
            )}
        >
            {children}
        </Link>
    );
}
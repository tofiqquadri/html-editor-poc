'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
    { label: 'CK Editor', href: '/ckeditor' },
    { label: 'Frola Editor', href: '/frola' },
    { label: 'TinyDocs', href: '/tinydocs' },
];

type Props = {};

const Navbar = ({}: Props) => {
    const pathname = usePathname();

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-bold text-xl text-gray-800">
                            Logo
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {NAV_ITEMS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                                            pathname === item.href
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                        }`}>
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

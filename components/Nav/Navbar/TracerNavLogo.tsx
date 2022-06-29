import React from 'react';
import Link from 'next/link';
import PoolsLogo from '/public/img/logos/tracer/tracer_perpetual_pools.svg';

const TracerNavLogo: React.FC = () => {
    return (
        <Link href="/" passHref>
            <a className="flex items-center">
                <button className="cursor-pointer">
                    <PoolsLogo className="h-auto w-full max-w-[202px]" alt="tracer-logo" />
                </button>
            </a>
        </Link>
    );
};

export default TracerNavLogo;

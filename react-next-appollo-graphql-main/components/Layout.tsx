import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="page">
            <Link href="/">
                <a className="logo">
                    <Image width={150} height={150} src="/new-ping.svg" alt="logo"/>
                    <div className="logo-text">TASK MATE</div>
                </a>
            </Link>
            {children}
        </div>
    );
}

export default Layout;

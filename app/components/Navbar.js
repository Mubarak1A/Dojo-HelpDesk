import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/dojo-logo.png'

export default function Navbar() {
    return (
        <nav>
            <Image
                src={Logo}
                alt='Dojo Helpdesk Logo'
                width={70}
                quality={100}
                placeholder='blur'
            />
            <Link href='/'>
                <h2>Dojo-HelpDesk</h2>
            </Link>
            <Link href='/tickets'>Tickets</Link>
        </nav>
    )
}

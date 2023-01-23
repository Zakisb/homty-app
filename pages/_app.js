import Layout from '../components/layout/Layout'
import '../styles/globals.scss'
import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { Router } from 'next/router';
import LandlordLayout from '../components/layout/landlord/LandlordLayout';



function MyApp({Component, pageProps, session}) {

    return (
        <SessionProvider session={session}>
                <Component {...pageProps} />
        </SessionProvider>
    )
}

export default MyApp

import Layout from '../components/layout/Layout'
import '../styles/globals.scss'
import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { Router } from 'next/router';

function MyApp({Component, pageProps, session}) {

    return (
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    )
}

export default MyApp

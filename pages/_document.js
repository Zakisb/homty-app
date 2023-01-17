import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head/>
            <body>
            <Main />
            <NextScript />
            {/*<Script
                id="googlemaps"
                type="text/javascript"
                strategy="beforeInteractive"
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
            />*/}
            </body>
        </Html>
    )
}
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'
import theme from '../theme'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            {/* Google Analytics */}
            <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
            <Script strategy="lazyOnload" id='google-analytics'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            {/* End Google Analytics */}

            {/* Start site components */}
            <Component {...pageProps} />
            {/* End site components */}
        </ChakraProvider>
    )
}

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Standard Meta information */}
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Bento is a Discord bot that allows you to manage, moderate, and grow your Discord community." />
                <meta name="theme-color" content="#e879f9" />

                {/* Open Graph Meta information */}
                <meta property="og:title" content="Bento Bot" />
                <meta property="og:description" content="Bento is a Discord bot that allows you to manage, moderate, and grow your Discord community." />
                <meta property="og:type" content="website" />

                {/* Twitter Meta information */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bento Bot" />
                <meta name="twitter:description" content="Bento is a Discord bot that allows you to manage, moderate, and grow your Discord community." />
            </Head>


            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
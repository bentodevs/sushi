import Head from 'next/head';
import HomeHero from '../components/homeCTA';
import NavBar from '../components/navbar'

export default function Home() {
    return (
        <>
            <Head>
                <title>Bento Bot - Home</title>
            </Head>
            <NavBar />
            <HomeHero />
        </>
    )
}

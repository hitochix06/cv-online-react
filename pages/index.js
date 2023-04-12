import Head from 'next/head'
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Experience from '@/components/sections/Experience'
import Works from '@/components/sections/Works'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Philibert Pachara- Développeur Full-Stack Javascript en Alternance</title>
        <meta name="description" content="Développeur web JavaScript en alternance, compétent en front-end et back-end, avec expérience en React et Node.js. Contactez-moi pour en savoir plus sur mes projets passés." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar> </Navbar>
      <Hero> </Hero>
      <About> </About>
      <Services></Services>
      <Experience></Experience>
      <Works></Works>
      <Contact></Contact>
      <Footer />
    </>
  )
}

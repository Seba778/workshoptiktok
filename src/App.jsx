import { useRef } from 'react';
import TopBanners from './components/TopBanners';
import Nav from './components/Nav';
import Reveal from './components/Reveal';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ResourceDetails from './components/ResourceDetails';
import Curriculum from './components/Curriculum';
import Method from './components/Method';
import ClientEvidence from './components/ClientEvidence';
import Bio from './components/Bio';
import WhoIsThisFor from './components/WhoIsThisFor';
import BonusSection from './components/BonusSection';
import Offer from './components/Offer';
import Faq from './components/Faq';
import Closing from './components/Closing';
import { Footer, MobileCta } from './components/Footer';
import DraftDialog from './components/DraftDialog';
import { useBonusTimer } from './hooks/useBonusTimer';
import { useCheckout } from './hooks/useCheckout';

export default function App() {
  const bonus = useBonusTimer();
  const dialogRef = useRef(null);
  const { handleCheckout, checkoutConfigured, loading } = useCheckout(dialogRef);

  return (
    <>
      <TopBanners />
      <Nav />
      <main>
        <Reveal>
          <Hero bonus={bonus} />
        </Reveal>
        <Reveal>
          <WhoIsThisFor />
        </Reveal>
        <Reveal>
          <Method />
        </Reveal>
        <Reveal>
          <Curriculum />
        </Reveal>
        <Reveal>
          <Bio />
        </Reveal>
        <Reveal>
          <ProductShowcase />
        </Reveal>
        <Reveal>
          <ResourceDetails />
        </Reveal>
        <Reveal>
          <ClientEvidence />
        </Reveal>
        <Reveal>
          <BonusSection bonus={bonus} />
        </Reveal>
        <Reveal>
          <Offer onCheckout={handleCheckout} checkoutConfigured={checkoutConfigured} loading={loading} />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <Closing />
        </Reveal>
      </main>
      <Footer />
      <MobileCta />
      <DraftDialog ref={dialogRef} />
    </>
  );
}
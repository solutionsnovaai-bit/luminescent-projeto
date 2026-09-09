import Hero from './components/Hero.jsx';
import Reconhecimento from './components/Reconhecimento.jsx';
import WhatsAppPreview from './components/WhatsAppPreview.jsx';
import Planos from './components/Planos.jsx';
import ComoFunciona from './components/ComoFunciona.jsx';
import NotaPessoal from './components/NotaPessoal.jsx';
import CtaFinal from './components/CtaFinal.jsx';
import Footer from './components/Footer.jsx';
import useReveal from './hooks/useReveal.js';

export default function App() {
  useReveal();

  return (
    <>
      <Hero />
      <Reconhecimento />
      <WhatsAppPreview />
      <Planos />
      <ComoFunciona />
      <NotaPessoal />
      <CtaFinal />
      <Footer />
    </>
  );
}

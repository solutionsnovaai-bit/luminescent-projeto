import Loader from './components/Loader.jsx';
import Cursor from './components/Cursor.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Reconhecimento from './components/Reconhecimento.jsx';
import WhatsAppPreview from './components/WhatsAppPreview.jsx';
import Planos from './components/Planos.jsx';
import ComoFunciona from './components/ComoFunciona.jsx';
import CtaFinal from './components/CtaFinal.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Reconhecimento />
      <WhatsAppPreview />
      <Planos />
      <ComoFunciona />
      <CtaFinal />
      <Footer />
    </>
  );
}

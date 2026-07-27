import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HeaderInfo from './components/HeaderInfo';
import InspirationCollection from './components/InspirationCollection';
import BeautifyYourSpace from './components/BeautifyYourSpace';
import BrowseRange from './components/BrowseRange';
import HowItWorks from './components/HowItWorks';
import MailingList from './components/MailingList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <HeaderInfo />
      <main>
        <InspirationCollection />
        <BeautifyYourSpace />
        <BrowseRange />
        <HowItWorks />
        <MailingList />
      </main>
      <Footer />
    </>
  );
}

export default App;

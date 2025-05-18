import '../App.css';

import SwastikClinic from '../components/SwastikClinic';
import WhyHomeopathy from '../components/WhyHomeopathy';
import HealthTips from '../components/HealthTips';
import Footer from '../components/Footer';
import Header from '../components/Header';
import About from '../components/About';
import Treatments from '../components/Treatments'


function Home() {
  return (
    <>
    <Header />
    <main className="home-page">
      <div className="page-container">
        <SwastikClinic />
        <About />
        <Treatments />
        <WhyHomeopathy />
        <HealthTips />
      </div>
    </main>
    <Footer />
  </>
  
  );
}

export default Home;

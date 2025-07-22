import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TreatmentsP from '../components/TreatmentsP';

const TreatmentsPage = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="page-container section">
        <TreatmentsP />
      </main>
      <Footer />
    </div>
  );
};

export default TreatmentsPage;

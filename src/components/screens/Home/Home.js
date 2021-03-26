import React from 'react';
import HomeHero from './blocks/HomeHero';
import HomeContent from './blocks/HomeContent';
import SignupNewsletter from '../../elements/SignupNewsletter/SignupNewsletter';
import Footer from '../../ui/Footer';
import HomeCuratedBy from './blocks/HomeCuratedBy';
import Layout from '../../ui/Layout';

const seo = {
  title: 'La Boite du Santon - Monthly Curation of French Provence Wines & more',
};

const Home = () => (
  <Layout seo={seo}>
    <HomeHero />
    <HomeContent />
    <HomeCuratedBy />
    <SignupNewsletter />
    <Footer />
  </Layout>
);

export default Home;

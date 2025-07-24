'use client';

import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </Layout>
  );
}

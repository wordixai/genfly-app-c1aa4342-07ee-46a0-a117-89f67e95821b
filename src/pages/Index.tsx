import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import ValueProposition from '@/components/ValueProposition';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <ValueProposition />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
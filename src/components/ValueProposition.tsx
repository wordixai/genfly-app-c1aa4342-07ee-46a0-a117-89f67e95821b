import React from 'react';
import { Button } from '@/components/ui/button';

const ValueProposition = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-white mb-8">
            Ideas earn nothing in drafts.
          </h2>
          
          <div className="space-y-6 body-text">
            <p>
              You already explain the same things — in Slack threads, meetings, Notion docs.
            </p>
            
            <p>
              Tapflow lets you turn that into something others can use — and something that earns.
            </p>
            
            <p>
              Most of your best thinking lives in private notes. What if you published just one of them?
            </p>
          </div>

          <div className="mt-12">
            <Button 
              size="lg"
              className="bg-purple-accent text-black hover:bg-purple-accent/90 px-8 py-6 text-lg font-semibold"
            >
              Claim your invite
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
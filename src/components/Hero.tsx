import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="hero-title text-white mb-4">
              <span className="animate-text-blur-in">notes</span>{' '}
              <span className="animate-text-blur-in animation-delay-200">→</span>{' '}
              <span className="animate-text-blur-in animation-delay-400">sellable</span>
            </h1>
            
            {/* AI prompt kits subtitle */}
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-accent opacity-60 animate-text-blur-in animation-delay-600">
                AI prompt kits
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 animate-fade-up animation-delay-800">
            <p className="hero-subtitle">
              You've got notes and experience — Tapflow helps you turn them into products people can buy.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up animation-delay-1000">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-gray-200 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <img 
                src="https://framerusercontent.com/images/cEgi2AXThPoElb6Vst7i9e7M8.png?scale-down-to=1024"
                alt="Claim your invite"
                className="h-12 w-auto"
              />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              *For now, invite-only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
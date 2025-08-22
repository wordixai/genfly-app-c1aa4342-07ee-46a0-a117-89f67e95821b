import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 blur-overlay border-b border-border/10">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512"
              alt="Tapflow"
              className="h-8 w-auto"
            />
          </div>

          {/* Center Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/changelog" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Changelog
            </a>
            <a 
              href="/blog" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="hidden sm:inline-flex"
            >
              Log in
            </Button>
            <Button 
              size="sm"
              className="bg-white text-black hover:bg-white/90"
            >
              Claim invite
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
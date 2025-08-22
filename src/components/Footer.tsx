import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sitemap */}
          <div>
            <div className="space-y-4">
              <a 
                href="/" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a 
                href="/changelog" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Changelog
              </a>
              <a 
                href="/contact" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="space-y-4">
              <a 
                href="https://twitter.com/tapflowhq"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                X/Twitter
              </a>
              <a 
                href="https://www.linkedin.com/company/tapflowhq"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="space-y-4">
              <a 
                href="/terms" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </a>
              <a 
                href="/privacy" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="mb-4">
              <h4 className="font-semibold text-foreground mb-2">Newsletter (rare, but good)</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Insights, launches, and behind-the-scenes plays from top creators. Useful ideas you can learn from — only when there's something good to share.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Button 
                type="submit"
                className="bg-white/20 text-white hover:bg-white/30"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Product Hunt Badge */}
        <div className="flex justify-center mt-12 mb-8">
          <a 
            href="https://www.producthunt.com/posts/tapflow-2-0" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=tapflow-2-0&theme=dark" 
              alt="Product Hunt Badge" 
              width="250" 
              height="54" 
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border/10">
          <p className="text-sm text-muted-foreground">
            Tapflow © 2025 — Knowledge, thoughtfully made.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
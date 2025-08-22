import React from 'react';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: string;
  title: string;
  author: string;
  price: string;
  image: string;
  avatar: string;
  link: string;
  authorLink: string;
}

const products: Product[] = [
  {
    id: '1',
    title: 'Product Marketing for Founders 👨‍💻',
    author: 'Paul Mit',
    price: '$135',
    image: 'https://framerusercontent.com/images/tSPlbFnkbXWwVXogKmG2yeYSHQ.png',
    avatar: 'https://framerusercontent.com/images/1NPVIg0UKl7q9lIFDSarzswxx6I.jpg',
    link: 'https://tapflow.co/p/marketing-for-founders-Wp3TBCckIS',
    authorLink: 'https://tapflow.co/paulmit'
  },
  {
    id: '2',
    title: 'Think Smarter. Question Everything.',
    author: 'Joan Westenberg',
    price: '$39',
    image: 'https://framerusercontent.com/images/3LvaPf9gC2261D35dHClCeCqpQc.png',
    avatar: 'https://framerusercontent.com/images/nfOPVCsuyCRX291qFJAR8KbdOBs.jpg',
    link: 'https://tapflow.co/p/critical-thinking-bjtLBkm9x4',
    authorLink: 'https://tapflow.co/joan'
  },
  {
    id: '3',
    title: 'French Language Course – from B2 to C1',
    author: 'Vincent de FrenchSchoolTV',
    price: '€299',
    image: 'https://framerusercontent.com/images/7RoT74y3tFj39bKof51Wc182STY.png',
    avatar: 'https://framerusercontent.com/images/m0NWSUaVUqgA1iMUJjoxfB4wxw.png',
    link: 'https://tapflow.co/p/du-b2-au-c1-4ebMhTxqJi',
    authorLink: 'https://tapflow.co/frenchschooltv'
  }
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative">
      <a 
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative rounded-2xl overflow-hidden border border-border/20 hover:border-border/40 transition-all duration-300 group-hover:scale-[1.02]"
      >
        <div className="aspect-video relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain bg-card"
          />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4">
            <Badge 
              variant="secondary" 
              className="bg-black/80 text-white border-none px-3 py-1 font-medium"
            >
              {product.price}
            </Badge>
          </div>
        </div>
      </a>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start space-x-3">
          {/* Author Avatar */}
          <a 
            href={product.authorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img
              src={product.avatar}
              alt={product.author}
              className="w-12 h-12 rounded-full object-cover"
            />
          </a>
          
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="font-medium text-foreground mb-1 group-hover:text-purple-accent transition-colors">
              <a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.title}
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">
              <a 
                href={product.authorLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {product.author}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Video Demo */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <video
              src="https://framerusercontent.com/assets/x55WYpCLiaS6yqWTPFMIILDXKco.mp4"
              className="w-full aspect-video object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
            Built for speed. Go from notes to a live product you can sell in 1–2 hours.
          </p>
        </div>

        {/* Recently Launched Section */}
        <div className="text-center mb-12">
          <h2 className="section-title text-white mb-12">Recently launched</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
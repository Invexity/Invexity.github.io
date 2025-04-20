import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Button from './Button';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-brown-900 text-xl mb-2">{product.name}</h3>
        <p className="text-brown-700 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-brown-900 font-bold">${product.price.toFixed(2)}</span>
          <Button 
            variant="primary" 
            size="small"
            className="flex items-center gap-1"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
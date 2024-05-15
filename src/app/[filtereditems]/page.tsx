'use client'

'use client'

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductsCard from '../../../components/Products/ProductCard';
import { Products } from '../../../utils/Products';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  images: {
    color: string;
    colorCode: string;
    image: string;
  }[];
  daily: number;
  weekly: number;
  period: number;
  reviews: any[]; // Update with the actual type of reviews if available
}

export default function Home(){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        if (searchParams) {
          const filtered = Products.filter((product) =>
            product.name.toLowerCase().includes(searchParams.get('query')?.toLowerCase() ?? '')
          );
          setFilteredProducts(filtered);
        }
      } catch (error) {
        console.error('Error fetching filtered products:', error);
      }
    };
    fetchFilteredProducts();
  }, [searchParams]);

  return (
    <div>
      {filteredProducts.length > 0 && (
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
          style={{
            height: "100vh",
            padding: "2rem",
            paddingTop: "15rem",
            paddingBottom: "10rem",
            marginBottom: "10rem",
          }}
        >
          {filteredProducts.map((product, id) => (
            <ProductsCard data={product} key={id} />
          ))}
        </div>
      )}
    </div>
  );
}

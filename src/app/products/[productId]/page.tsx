"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import useParams from "next/router" instead of "next/navigation"
import { Products } from "../../../../utils/Products";
import { Button, Rating, colors } from "@mui/material";
import Container from "@mui/material/Container";

import { useAppDispatch } from "../../../../utils/reduxstore/hooks";
import { addToCart } from "../../../../utils/reduxstore/cartSlice";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";

interface IProduct {
  id: string;
  name: string;
  price: number;
  daily: number;
  weekly: number;
  reviews: any[];
  description: string;
  inStock: boolean;
  category: string;
  images?: { image: string }[];
}

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams<{ productId?: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (productId) {
      const selectedProduct = Products.find(
        (item) => item.id.toString() === productId
      );
      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    }
  }, [productId]);

  return (
    <div style={{   backgroundColor: "white",}}>
    <Container>
      <div
        style={{
  
          paddingTop: "12rem",
          paddingBottom: "10rem",
          marginBottom: "10rem",
        }}
      >
        {product ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-medium text-slate-700">
                  {product.name}
                </h2>
                <div>
                  {product.images && (
                    <div style={{ width: "20vh" }}>
                      <Image
                        src={product.images[0].image}
                        alt={product.description}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center text-slate-700">
                  <Rating value={4} readOnly />
                  <h1 className="text-3xl font-medium text-slate-700">
                    {product.reviews.length}
                  </h1>
                </div>
                <Horizontal />
                <div className="text justify">{product.description}</div>
                <Horizontal />
                <div>
                  <span className="font-semi-bold">CATEGORY:</span>
                  {product.category}
                </div>
                <div
                  className={
                    product.inStock ? "text-teal-400" : "text-rose-400"
                  }
                >
                  {product.inStock ? "in stock" : "out of stock"}
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    {" "}
                    <span style={{ color: "blue", marginRight: "0.2rem" }}>
                      Deposit:
                    </span>
                    {product.price} Ksh
                  </div>
                  <div>
                    {" "}
                    <span style={{ color: "red", marginRight: "0.2rem" }}>
                      Daily:
                    </span>
                    {product.weekly} Ksh
                  </div>
                  <div>
                    {" "}
                    <span style={{ color: "red", marginRight: "0.2rem" }}>
                      Weekly:
                    </span>
                    {product.daily} Ksh
                  </div>
                </div>
                <div>
                  {/* <Button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </Button>
                  {count}
                  <Button
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </Button> */}
                </div>
                <button
                  className="btn btn-outline btn-primary"
                  onClick={() => {
                    dispatch(
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        productCount: count,
                      })
                    );
                  }}
                >
                  {" "}
                  Add to Cart
                </button>{" "}
                <button className="btn btn-outline btn-secondary">
                  <ReactWhatsapp
                    element="webview"
                    number="254-707-738-434"
                    message={`Hi am interested in ${product.name} is it available?`}
                  >
                  fast buy whatsapp
                  </ReactWhatsapp>
                </button>
              </div>
              <div>
                <div>
                  {product.images && (
                    <div style={{ width: "40vh",}}>
                      <Image
                        src={product.images[0].image}
                        alt={product.description}
                        width={100}
                        height={100}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
    </div>
  );
};

export default ProductDetails;

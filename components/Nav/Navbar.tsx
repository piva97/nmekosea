"use client";
import React, { useState } from "react";
import { Suspense } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Cart from "../cart/Cart";
import Link from "next/link";
import { Products } from "../../utils/Products";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  // Add other properties here as needed
}

const Navbar = () => {
  const router = useRouter(); // Get the router object

  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Function to filter products based on search query
  const handleSearch = (query: string) => {
    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    setSearchQuery(query);
    const filtered = Products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    if (filtered.length > 0) {
      router.push(`/filtereditems?${params.toString()}`);
    }
  };

  return (
    <div>
      {/* <div className="navbar bg-base-100" style={{ position: "fixed", top: 0 }}>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">BMK</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div> */}

      <Suspense>
        <div
          id="upper-nav"
          style={{
            background: "white",
            height: "10vh",
            width: "100%",
            position: "fixed",
            zIndex: "2",
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "900",
            color: "green",
          }}
        >
          <Link href="/"><h1>LAIKIPIA HERBAL</h1></Link>
        </div>

        <header
          style={{
            position: "fixed",
            width: "100%",
            zIndex: 2,
            top: "10vh",
          }}
        >
          <nav
            style={{
              backgroundColor: "green",
              height: "100px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "3vh",
              fontSize: "2rem",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            <Link href="/">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myimages-10f37.appspot.com/o/logo.png?alt=media&token=9fdbb6bd-e133-4844-98b8-3af93c0a57a2"
                alt="Description of your image"
                width={70} // Set the width of the image
                height={70} // Set the height of the image
              />
            </Link>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch(searchQuery);
              }}
            >
              {" "}
              <Suspense>
                <input
                  type="search"
                  id="default-search"
                  className="p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Herbs, Suplim..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  required
                  style={{ marginRight: "10px" }}
                />
              </Suspense>
              <Button
                variant="contained"
                color="success"
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </Button>
            </form>

            <div>
              <MdOutlineShoppingCart style={{color: 'white'}}
                onClick={() => {
                  setShowCart(!showCart);
                }}
              />
            </div>
          </nav>
          <div> {showCart ? <Cart /> : null}</div>
        </header>
      </Suspense>
    </div>
  );
};

export default Navbar;

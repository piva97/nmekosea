import { Products } from "../../utils/Products";
import ProductsCard from "../../components/Products/ProductCard";
import zIndex from "@mui/material/styles/zIndex";
// import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div style={{ paddingTop: "12rem" }}>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/myimages-10f37.appspot.com/o/MAIN%20PHOTO.png?alt=media&token=5b9b859c-a401-40ea-977b-4a844fc9b4a0"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
        style={{
          height: "100vh",
          padding: "2rem",

          paddingBottom: "10rem",
          marginBottom: "10rem",
          background: "white",
        }}
      >
        {Products.map((product: any, id: number) => (
          <ProductsCard data={product} key={id} />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

import Heading from "../heading/Heading";
import { useState } from "react";
import Cards from "../Cards/Cards";
import ProductList from "../Products/ProductList";
import { Link } from "react-router-dom";

const Products = () => {
  const Catogries = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  let filteredItem =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((item) => item.catogary === activeTab);

  const renderCards = filteredItem.slice(0, 8).map((product) => {
    return (
      <Cards
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    );
  });

  return (
    <section id="products">
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {Catogries.map((catogary) => {
            return (
              <button
                key={catogary}
                className={`px-5 py-2 md:text-lg rounded-lg cursor-pointer
               ${
                 activeTab === catogary
                   ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                   : "bg-zinc-100"
               }`}
                onClick={() => setActiveTab(catogary)}
              >
                {catogary}
              </button>
            );
          })}
        </div>
        {/* Product Listing  */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
          {renderCards}
        </div>

        <div className="mt-15 mx-auto w-fit">
          <Link
            to="/allproducts"
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105  hover:to-orange-600 transition-all duration-300 cursor-pointer"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;

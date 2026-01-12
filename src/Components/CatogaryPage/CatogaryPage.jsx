import React from "react";
import Banner from "../Banner/Banner";
import ProductList from '../Products/ProductList'
import Cards from '../Cards/Cards'

const CatogaryPage = ({title , bgImage ,Catogaries=[]}) => {

  let filteredItems = Catogaries.includes('All')
  ?ProductList
  :ProductList.filter(item=> Catogaries.includes(item.catogary))


  const renderProduct = filteredItems.map(product=>{
    return(
        <Cards image={product.image} name={product.name} price={product.price}/>
    )
  })

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />
      <div className="grid grid-cols-1 gap-9 py-20 md:grid-cols-4 max-w-[1400px] mx-auto px-10">
        {renderProduct}
      </div>
    </div>
  );
};

export default CatogaryPage;

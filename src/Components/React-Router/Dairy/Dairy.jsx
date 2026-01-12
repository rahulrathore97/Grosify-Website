import React from "react";
import CatogaryPage from "../../CatogaryPage/CatogaryPage";
import BgDairy from '../../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <CatogaryPage title="Dairy & Eggs" bgImage={BgDairy} Catogaries={'Dairy'}/>
    </div>
  );
};

export default Dairy;

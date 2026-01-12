import React from "react";
import CatogaryPage from "../../CatogaryPage/CatogaryPage";
import BgAll from '../../../assets/all-banner.jpg'

const ViewAll = () => {
  return (
    <div>
      <CatogaryPage title="All Products" bgImage={BgAll}  Catogaries={['All']}/>
    </div>
  );
};

export default ViewAll;

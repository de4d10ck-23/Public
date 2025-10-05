import { useState, useEffect } from "react";
import Products from "./products";
import Category from "./category";

function BodyContents() {
  const [categoryDetails, setCategoryDetails] = useState({
    categoryID: "1",
    categoryName: "Best Sellers",
  });

  useEffect(() => {
    console.log(categoryDetails.categoryName);
  }, [categoryDetails]);

  return (
    <>
      <Category
        categoryDetails={categoryDetails}
        setCategoryDetails={setCategoryDetails}
      />
      <Products
        categoryID={categoryDetails.categoryID}
        categoryName={categoryDetails.categoryName}
      ></Products>
    </>
  );
}

export default BodyContents;

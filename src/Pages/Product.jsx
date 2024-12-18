import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { products } = useContext(ShopContext);

  const { productId } = useParams();

  const product = products.find((e) => e.id === Number(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts productId={product.id} />
    </div>
  );
};

export default Product;

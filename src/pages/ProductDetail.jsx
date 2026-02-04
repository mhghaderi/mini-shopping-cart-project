import React from "react";
import { useParams } from "react-router-dom";

import { initialProducts } from "../data/product";

const ProductDetail = () => {
  const { id } = useParams();

const [product ,setProduct] = React.useState(null);
  
    return <div>ProductDetail</div>;
};

export default ProductDetail;

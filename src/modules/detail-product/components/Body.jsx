import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {  Spin } from "antd";
import { DetailProd } from "./product-infomation/Layout";
import DescProd from "./product-description/Layout";
import { SectionDivider } from "./global/SectionDivider";
// import { YouMayAlso } from "./you-may-also-like/Layout";
import { ProductRevi } from "./product-review/Layout";

const Body = () => {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/product/get/by-id/${id}`);
        setProductData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching product data");
        setLoading(false);
      }
    };
    getProduct();
  },[]);
  console.log(productData);
  return (
    <>
      {loading && <Spin/>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="product-page-container">
            <div className="product-information">
                {/* Component ProductInfo */}
                <DetailProd prod={productData} />
            </div>
          
            <SectionDivider title="PRODUCT DESCRIPTION" />
            <div className="product-description">
                {/* Component ProductDescription */}
                <DescProd data={productData}/>
            </div>
            <SectionDivider title="REVIEWS" />
            <div className="review">
                  <ProductRevi data={productData}/>
                {/* Component ProductReview */}
            </div>
            {/* <SectionDivider title="YOU MAY ALSO LIKE" /> */}
            <div className="product-recommendations">
              {/* <YouMayAlso data={productData}/> */}
                {/* Component recommendations */}
            </div>
        </div>
        )}
    </>
  );
};
export default Body;
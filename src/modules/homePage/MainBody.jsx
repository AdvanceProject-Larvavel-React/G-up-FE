import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import "./styles/MainBody.css";
import Category from "../../global-components/core/CardCategory/Category";
import BannerList from "./components/Banner";
// import Search from "../../global-components/core/headers/inputs/Search";
// import SearchChildren from "./components/Title";
// import Title from "./components/Title";
import Store from "./components/Store";
import Product from "./components/Product";
import Discover from "./components/Discover";

export const MainBody = () => {
  const [products, setProducts] = useState([]);
  const [storeInfo, setStoreInfo] = useState({});
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);

  // Fetch the store profile data
  const fetchStoreData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/store/get/active"
      );
      const storeData = response.data.data;
      setStoreInfo(storeData);
    } catch (error) {
      message.error("Error fetching profile data");
    }
  };

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/category/get/active"
      );
      const categories = response.data.data;
      setCategories(categories);
    } catch (error) {
      message.error("Error fetching profile data");
    }
  };

  // Fetch active products data
  const fetchProductsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/product/get/active"
      );
      const product = response.data.data;
      setProducts(product);
    } catch (error) {
      console.error("Error fetching products data:", error);
      message.error("Error fetching products data");
    }
  };

  console.log(banners);
  //  const fetchBannersData = async () => {
  //    try {
  //      const response = await axios.get(
  //        "http://localhost:8000/api/banner/get/active"
  //      );
  //      const banner = response.data.data;
  //      setBanners(banner);
  //      console.log(banner);
  //    } catch (error) {
  //      console.error("Error fetching banner data:", error);
  //      message.error("Error fetching banner data");
  //    }
  //  };

  useEffect(() => {
    fetchStoreData();
    fetchProductsData();
    fetchCategoryData();
    // fetchBannersData();
    setBanners([
      {
        img: "https://static.vecteezy.com/system/resources/previews/011/640/737/non_2x/shopping-day-sale-banner-template-design-for-web-or-social-media-vector.jpg",
      },
    ]);
  }, []);

  const filteredBestSellProds = products.filter(
    (product) => product.sold >= 100 // Điều kiện set product ở đây
  );

  console.log("Thông tin sản phẩm bán ra nhiều hơn 100", filteredBestSellProds);
  console.log("Thông tin của store:", storeInfo);
  console.log("Category:", categories);

  return (
    <>
      <h2 className="text-center">Category List</h2>
      <Row className="catego " gutter={[16, 16]}>
        <Col span={2}></Col>
        {categories.map((category) => (
          <Col span={4} key={category.id}>
            <Category category={category} />
          </Col>
        ))}
        <Col span={2}></Col>
      </Row>
      <Row>
        <Col span={24}>
          <BannerList data={banners} />
        </Col>
      </Row>

      <Row
        style={{
          margin: "25px auto",
          textAlignItem: "center",
          textAlign: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: 5,
          height: 40,
          width: 600,
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        <h4 style={{ textAlign: "center", marginTop: 5 }} className="Dtitle">
          STUFF YOUR BANG WITH DEALS
        </h4>
      </Row>
      {/* <Row style={{ justifyContent: "center" }}>
        <Col>
          <Title />
        </Col>
      </Row> */}

      <Row>
        <Col span={24}>
          <Product />
        </Col>
      </Row>
      <Row
        style={{
          margin: "25px auto",
          textAlignItem: "center",
          textAlign: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: 5,
          height: 40,
          width: 600,
          marginTop: 30,
          marginBottom: 40,
        }}
      >
        <h4 style={{ textAlign: "center", marginTop: 5 }} className="Dtitle">
          STORES
        </h4>
      </Row>
      <Row>
        <Col span={24}>
          <Store />
        </Col>
      </Row>

      <Row
        style={{
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: 10,
          height: 40,
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <h4 style={{ textAlign: "center", marginTop: 5 }} className="Dtitle">
          DAILY DISCOVER
        </h4>
      </Row>

      <Row>
        <Col span={24}>
          <Discover data={filteredBestSellProds} />
        </Col>
      </Row>
    </>
  );
};

export default MainBody;

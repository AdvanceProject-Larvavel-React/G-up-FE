import { Col, Row, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerList from "./components/Banner";
import "./styles/MainBody.css";
// import Search from "../../global-components/core/headers/inputs/Search";
// import SearchChildren from "./components/Title";
// import Title from "./components/Title";
import CategoryCard from "../../global-components/core/CardCategory/Category";
import Discover from "./components/Discover";
import Product from "./components/Product";
import Store from "./components/Store";

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
  const chunkSize = 4; // Số lượng thẻ mỗi slide

  // Chia mảng categories thành các mảng con với chunkSize phần tử
  const chunkedCategories = [];
  for (let i = 0; i < categories.length; i += chunkSize) {
    chunkedCategories.push(categories.slice(i, i + chunkSize));
  }
  return (
    <>
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
          CATEGORY LIST
        </h4>
      </Row>

      <Row className="catego " gutter={[16, 16]}>
        <Col span={0.5}></Col>
        {/* {categories.map((category) => (
          <Col span={5} key={category.id}>
            <Category category={category} />
          </Col>
        ))} */}
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showArrows={true}
          showStatus={true}
          showIndicators={false}
          emulateTouch
        >
          {chunkedCategories.map((chunk, index) => (
            <div key={index} style={{display:"flex", flex:"wrap" , maxWidth: '1200px', margin: '10px auto' }}>
              {chunk.map((category, idx) => (
                <CategoryCard key={idx} category={category} />
              ))}
            </div>
          ))}
        </Carousel>
        <Col span={1}></Col>
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
          STUFF YOUR BAG WITH DEALS
        </h4>
      </Row>

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

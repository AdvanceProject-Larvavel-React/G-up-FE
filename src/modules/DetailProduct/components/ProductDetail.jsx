import '../styles/ProductDetail.css';

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="product-image">
        <img src="[Image of the product description]" alt="Sản phẩm G-Skin White" />
      </div>
      <div className="product-info">
        <h2>Bộ sản phẩm G-Skin White</h2>
        <p>
          <b>Thương hiệu:</b> G-Skin
        </p>
        <p>
          <b>Loại da:</b> Mọi loại da
        </p>
        <p>
          <b>Công dụng:</b> Dưỡng trắng da, mờ nám, tàn nhang
        </p>
        <p>
          <b>Bộ sản phẩm gồm:</b>
          <ul>
            <li>Sữa rửa mặt G-Skin White</li>
            <li>Toner G-Skin White</li>
            <li>Serum G-Skin White</li>
            <li>Kem dưỡng trắng da G-Skin White</li>
            <li>Kem chống nắng G-Skin White</li>
          </ul>
        </p>
        <p>
          <b>Giá bán:</b> 1.200.000 VNĐ
        </p>
        
      </div>
    </div>
  );
};

export default ProductDetail;
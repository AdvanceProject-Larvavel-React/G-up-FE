import '../styles/SellingProducts.css';

const SellingProducts = ({ products }) => {
    return (
        <div className="selling-products">
            <div className="header">
                <h2 className="title">SELLING PRODUCTS</h2>
                <a href="#" className="see-all">
                    SEE ALL
                </a>
            </div>
            <div className="product-grid">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-title">{product.name}</h3>
                        <p className="product-price">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SellingProducts;

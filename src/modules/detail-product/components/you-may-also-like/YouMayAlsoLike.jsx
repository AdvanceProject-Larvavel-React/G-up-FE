import '../../../detail-product/styles/YouMayAlsoLike.css';
const YouMayAlsoLike = (props) => {
    console.log(props);
    const products = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            name: 'G9-Skin White In Creamy Pack Vitamin',
            price: 9.99,
            originalPrice: 10.99,
            discount: 10,
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            name: 'G9-Skin White In Creamy Pack Vitamin',
            price: 9.99,
            originalPrice: 10.99,
            discount: 10,
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            name: 'G9-Skin White In Creamy Pack Vitamin',
            price: 9.99,
            originalPrice: 10.99,
            discount: 10,
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/150',
            name: 'G9-Skin White In Creamy Pack Vitamin',
            price: 9.99,
            originalPrice: 10.99,
            discount: 10,
        },
    ];

    return (
        <div className="you-may-also-like">
            <h2 className="section-title"></h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <div className="product-price">
                                <span className="original-price">${product.originalPrice}</span>
                                <span className="discount-price">${product.price}</span>
                                <span className="discount-badge">{product.discount}% OFF</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouMayAlsoLike;
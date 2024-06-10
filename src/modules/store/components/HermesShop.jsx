import '../styles/HermesShop.css';

const HermesShop = () => {
    const products = [
        {
            image: 'product1.jpg',
            title: '09-Skin White in Creamy Pack Whiteout',
            price: '$24.00',
        },
        // Add more suggestion data here
    ];
    return (
        <div className="hermes-shop">
            <div className="header">
                <div className="logo">
                    <img src="hermes-logo.png" alt="Hermes" />
                </div>
                <div className="follower-count">
                    <span>4,550,629.4K FOLLOWER</span>
                </div>
            </div>
            <div className="shop-items">
                {products.map((product, index) => (
                    <div key={index} className="shop-item-card">
                        <img src={product.image} alt={product.name} className="shop-item-image" />
                        <h3 className="shop-item-title">{product.name}</h3>
                        <p className="shop-item-price">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HermesShop;
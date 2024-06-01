import AddToCartButton from "./components/ProductInformation/AddToCartButton";
import BuyNowButton from "./components/ProductInformation/BuyNowButton";
import FavoriteButton from "./components/ProductInformation/FavoriteButton";
import PriceDisplay from "./components/ProductInformation/PriceDisplay";
import Product from "./components/ProductInformation/Product";
import ProductImage from "./components/ProductInformation/ProductImage";
import ProductInfo from "./components/ProductInformation/ProductInfo";
import RatingDisplay from "./components/ProductInformation/RatingDisplay";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import ProductReview from "./components/ProductReview/ProductReview";
import ProductComment from "./components/ProductComment/ProductComment";



return (
  <div>
    <Product>
      <ProductImage />
      <ProductInfo />
      <ProductDescription />
      <ProductReview />
      <AddToCartButton />
      <BuyNowButton />
      <FavoriteButton />
    </Product>
    
  </div>

);
export default Product;
import { RightCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ProductCard = ({ image, title, price }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Price>${price}</Price>
    </Card>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <Grid>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </Grid>
  );
};

const App = () => {
  const products = [
    {
      image: 'product1.jpg',
      title: 'GS-Skin White in Creamy Pack Whitening',
      price: 15.99,
    },
    {
      image: 'product2.jpg',
      title: 'GS-Skin White in Creamy Pack Whitening',
      price: 15.99,
    },
    {
      image: 'product3.jpg',
      title: 'GS-Skin White in Creamy Pack Whitening',
      price: 15.99,
    },
    {
      image: 'product4.jpg',
      title: 'GS-Skin White in Creamy Pack Whitening',
      price: 15.99,
    },
   
  ];

  return (
    <Container>
      <Header>SELLING PRODUCTS</Header>
      <ProductGrid products={products} />
      <SeeAllButton style={{ backgroundColor:'red'}}>
        SEE ALL <RightCircleIcon />
      </SeeAllButton>
    </Container>
  );
};

const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative; /* Thêm position: relative vào Container */
  margin-top:20px;
`;
const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  margin-left: -1200px; /* Di chuyển sang trái 70px */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  grid-gap: 100px; // tăng khoảng cách lên 2rem (20px)
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 1rem 0 0.5rem;
  text-align: center;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;


const SeeAllButton = styled.button`
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; /* Thêm position: absolute vào SeeAllButton */
  top: 2rem; /* Di chuyển lên 2rem từ trên xuống */
  right:6rem;
`;

const RightCircleIcon = styled(RightCircleOutlined)`
  margin-left: 0.5rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(100% - 7px); 
  height: calc(100% - ̃70px); 

`;

export default App;
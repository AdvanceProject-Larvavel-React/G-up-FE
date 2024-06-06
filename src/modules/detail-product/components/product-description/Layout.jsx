import { Card, Typography, Divider, Image } from 'antd';

const { Title, Text } = Typography;

const DescProd = (props) => {
  const { category, store, name: prodName, price, description, quantity, sold, file_paths } = props.data;
  const { name: storeName, address: storeAddress, phone: storePhone } = store;
  const { name: cateName, description: cateDesc } = category;

  return (
    <Card style={{ width: 600, margin: 'auto', marginTop: 50 }}>
      <Image src={file_paths} alt={prodName} style={{ width: '100%', maxHeight: 300, objectFit: 'cover' }} />

      <div style={{ padding: '20px 0' }}>
        <Title level={2}>{prodName}</Title>
        <Text strong>Store: </Text><Text>{storeName}</Text>
        <Divider />

        <Text strong>Price: </Text><Text>${price}</Text><br />
        <Text strong>Description: </Text><Text>{description}</Text><br />
        <Text strong>Quantity: </Text><Text>{quantity}</Text><br />
        <Text strong>Sold: </Text><Text>{sold}</Text><br />
        <Text strong>Category: </Text><Text>{cateName}</Text><br />
        <Text strong>Category Description: </Text><Text>{cateDesc}</Text><br />
        <Divider />

        <Text strong>Store Location: </Text><Text>{storeAddress}</Text><br />
        <Text strong>Store Phone: </Text><Text>{storePhone}</Text><br />
      </div>
    </Card>
  );
};

export default DescProd;
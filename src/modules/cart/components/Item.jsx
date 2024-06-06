import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Item.css"
import { Button, Card, Col, Image, List, Row, Space, Typography } from "antd";
import { ShopBag } from "./ShopBag";
export const Item = (props) => {
    console.log("check props item",props);
    const { id, total, items } = props.item;
    localStorage.setItem('total', total);
    const [products, setProducts] = useState([]);
    const [countItem, setCountItem] = useState(0);

    useEffect(() => {
        const fetchProductDetails = async () => {
            let parsedItems = [];
            try {
                parsedItems = JSON.parse(items);
            } catch (error) {
                console.error('Error parsing items JSON:', error);
                return;
            }
            const productDetailsPromises = parsedItems.map(async (item) => {
                try {
                    const response = await axios.get(`http://localhost:8000/api/product/get/by-id/${item.product_id}`);
                    return { ...item, productDetails: response.data };
                } catch (error) {
                    console.error(`Error fetching product details for product ID ${item.product_id}:`, error);
                    return { ...item, productDetails: null };
                }
            });
            const detailedProducts = await Promise.all(productDetailsPromises);
            setProducts(detailedProducts);
        };

        fetchProductDetails();
    }, [items]);
    console.log("cac item product", products);
    const handleDelete = (id) => { id };
    const handleAddToWishlist = (id) => { id };
    return (
        <>
            <div className="cart-item">
                <ShopBag id={id} total={countItem} />
                <br /><br />
                <div className="item-list">
                    <List
                        grid={{ gutter: 16, column: 1 }}
                        dataSource={products}
                        renderItem={(item, index) => (
                            setCountItem(index),
                            <List.Item key={index}>
                                <Card>
                                    <Row gutter={[16, 16]}>
                                        <Col>
                                            <Image
                                                src={item.productDetails.data.file_paths}
                                                alt={item.productDetails.data.name}
                                                style={{ objectFit: 'cover', maxHeight: "450px" }}
                                            />
                                        </Col>
                                        <Col flex="auto">
                                            <Space direction="vertical">
                                                <Typography.Text>Quantity: {item.quantity}</Typography.Text>
                                                {item.productDetails ? (
                                                    <>
                                                        <Typography.Text>Product Name: {item.productDetails.data.name}</Typography.Text>
                                                        <Typography.Text>Product Price: {item.productDetails.data.price}</Typography.Text>
                                                    </>
                                                ) : (
                                                    <Typography.Text type="danger">Unable to fetch product details.</Typography.Text>
                                                )}
                                            </Space>
                                        </Col>
                                    </Row>
                                    <div style={{ marginTop: '16px', textAlign: 'right' }}>
                                        <Button type="primary" onClick={() => handleDelete(index)}>Delete</Button>
                                        <Button style={{ marginLeft: '8px' }} onClick={() => handleAddToWishlist(index)}>Add to Wishlist</Button>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </>
    )
} 
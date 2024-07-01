import { useEffect, useState } from "react";
import { Button, Col, Row, Skeleton, Space, Table, message } from "antd";
import { convertDateToDDMMYYYY } from "../../../utils/date.utils";
import { getInactiveProducts, updateProduct } from "../api/ProductApis";

const ProductInactiveDashboard = () => {
  const [inactiveProducts, setInactiveProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: 0,
  });

  const fetchInactiveProducts = async () => {
    try {
      const response = await getInactiveProducts();
      setInactiveProducts(response.data.data);
      setPagination({
        ...pagination,
        total: response.data.data.length,
      });
    } catch (error) {
      setError("Failed to fetch inactive products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInactiveProducts();
  }, []);

  const handleTableChange = (pagination) => {
    setPagination({
      ...pagination,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  const handleEnableProduct = async (productId) => {
    console.log("Attempting to enable product with ID:", productId);
    try {
      setLoading(true);
      const response = await updateProduct(productId, { "status_id": 1 });
      console.log("Update response:", response);
      message.success("Product enabled successfully");
      fetchInactiveProducts();
    } catch (error) {
      console.error("Error enabling product:", error);
      message.error("Failed to enable product. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => convertDateToDDMMYYYY(date),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="large">
          <Button onClick={() => handleEnableProduct(record.id)}>Enable</Button>
        </Space>
      ),
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1 style={{ textAlign: "center" }}>Inactive Products</h1>
        <Button
          type="primary"
          onClick={() => {
            setLoading(true);
            fetchInactiveProducts();
          }}
          style={{ marginBottom: 16 }}
        >
          Refresh
        </Button>
        {loading ? (
          <Skeleton active />
        ) : (
          <Table
            dataSource={inactiveProducts}
            columns={columns}
            pagination={{
              current: pagination.current,
              pageSize: pagination.pageSize,
              total: pagination.total,
              onChange: handleTableChange,
            }}
          />
        )}
        {error && <div style={{ color: 'red', textAlign: 'center' }}>Error: {error}</div>}
      </Col>
    </Row>
  );
};

export default ProductInactiveDashboard;

import { Button, Col, Modal, Row, Skeleton, Space, Table, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { destroyProduct, disableProduct, getActiveProducts } from "../api/ProductApis";
import { UpdateProduct } from "./components/UpdateProduct";
import { convertDateToDDMMYYYY } from "../../../utils/date.utils";

const ProductDashboards = () => {
  const [activeProducts, setActiveProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: 0,
  });
  const [sortOrder, setSortOrder] = useState(null);
  const [imagePreviewVisible, setImagePreviewVisible] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const navigate = useNavigate();

  const fetchActiveProducts = async () => {
    try {
      const response = await getActiveProducts();
      setActiveProducts(response.data.data);
      setTotalProducts(response.data.length);
      setPagination((prev) => ({
        ...prev,
        total: response.data.length,
      }));
    } catch (error) {
      setError("Failed to fetch active products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActiveProducts();
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination((prev) => ({
      ...prev,
      current: pagination.current,
      pageSize: pagination.pageSize,
    }));

    if (sorter && sorter.order) {
      setSortOrder(sorter.order);
      const sortedData = [...activeProducts].sort((a, b) => {
        if (sorter.order === "ascend") {
          return a[sorter.field] > b[sorter.field] ? 1 : -1;
        } else {
          return a[sorter.field] < b[sorter.field] ? 1 : -1;
        }
      });
      setActiveProducts(sortedData);
    }
  };

  const handlePreviewImage = (url) => {
    setImagePreviewUrl(url);
    setImagePreviewVisible(true);
  };

  const handleClosePreview = () => {
    setImagePreviewVisible(false);
    setImagePreviewUrl("");
  };

  const handleSortToggle = () => {
    setSortOrder(sortOrder === "ascend" ? "descend" : "ascend");
    const sortedData = [...activeProducts].reverse();
    setActiveProducts(sortedData);
  };

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setUpdateModalVisible(true);
  };

  const handleUpdate = (updatedProduct) => {
    const updatedProducts = activeProducts.map((prod) =>
      prod.id === updatedProduct.id ? updatedProduct : prod
    );
    setActiveProducts(updatedProducts);
    setUpdateModalVisible(false);
  };

  const showDeleteConfirm = (productId) => {
    Modal.confirm({
      title: "Delete Product",
      content: "Do you want to delete this product permanently, disable it, or cancel?",
      okText: "Delete Permanently",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          setLoading(true);
          await destroyProduct(productId);
          message.success("Product deleted permanently");
          fetchActiveProducts();
        } catch (error) {
          message.error("Failed to delete product permanently");
        } finally {
          setLoading(false);
        }
      },
      onCancel: () => {},
      okButtonProps: { style: { display: "none" } },
      footer: [
        <Button
          key="delete"
          type="danger"
          onClick={async () => {
            try {
              setLoading(true);
              await destroyProduct(productId);
              message.success("Product deleted permanently");
              fetchActiveProducts();
              Modal.destroyAll();
            } catch (error) {
              message.error("Failed to delete product permanently");
            } finally {
              setLoading(false);
            }
          }}
        >
          <Button style={{ backgroundColor: "red" }}>Delete Permanently</Button>
        </Button>,
        <Button
          key="disable"
          type="primary"
          style={{ marginRight: "15px" }}
          onClick={async () => {
            try {
              setLoading(true);
              await disableProduct(productId);
              message.success("Product disabled successfully");
              fetchActiveProducts();
              Modal.destroyAll();
            } catch (error) {
              message.error("Failed to disable product");
            } finally {
              setLoading(false);
            }
          }}
        >
          Disable
        </Button>,
        <Button key="cancel" onClick={() => Modal.destroyAll()}>
          Cancel
        </Button>,
      ],
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => category.name,
    },
    {
      title: "Image",
      dataIndex: "file_paths",
      key: "file_paths",
      render: (file_paths) => (
        <img
          src={file_paths}
          alt="Product"
          style={{
            width: 50,
            height: 50,
            borderRadius: "10px",
            border: "1px solid grey",
          }}
          onClick={() => handlePreviewImage(file_paths)}
        />
      ),
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
          <Button onClick={() => handleUpdateClick(record)}>Update</Button>
          <Button onClick={() => showDeleteConfirm(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const handleCreateProduct = () => {
    navigate("/list-product/create");
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1 style={{ textAlign: "center" }}>List Product</h1>
        <Button
          type="primary"
          onClick={() => {
            setLoading(true);
            fetchActiveProducts();
          }}
          style={{ marginBottom: 16 }}
        >
          Refresh
        </Button>
        <Button onClick={handleSortToggle} style={{ marginLeft: "10px" }}>
          {sortOrder === "ascend" ? "Sort Descending" : "Sort Ascending"}
        </Button>
        <Button
          type="primary"
          onClick={handleCreateProduct}
          style={{ marginBottom: 16, marginLeft: 16 }}
        >
          Add Product
        </Button>
        <div style={{ marginBottom: 16 }}>Total Products: {totalProducts}</div>
        {loading ? (
          <Skeleton active />
        ) : (
          <Table
            dataSource={Array.isArray(activeProducts) ? activeProducts : []}
            columns={columns}
            pagination={{
              current: pagination.current,
              pageSize: pagination.pageSize,
              total: pagination.total,
              onChange: (page, pageSize) => {
                setPagination({ ...pagination, current: page, pageSize });
              },
            }}
            onChange={handleTableChange}
          />
        )}
        {error && <div>Error: {error}</div>}
        <Modal
          visible={imagePreviewVisible}
          onCancel={handleClosePreview}
          footer={null}
        >
          <img src={imagePreviewUrl} alt="Preview" style={{ width: "100%" }} />
        </Modal>
        <UpdateProduct
          visible={updateModalVisible}
          onClose={() => setUpdateModalVisible(false)}
          product={selectedProduct}
          onUpdate={handleUpdate}
        />
      </Col>
    </Row>
  );
};
export default ProductDashboards;
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Skeleton, Space, Table, message } from "antd";
import { convertDateToDDMMYYYY } from "../../../utils/date.utils";
import { UpdateCategory } from "./components/UpdateCategory";
import { CreateCategory } from "./components/CreateCategory";
import { destroyCategory, disableCategory, getActiveCategories } from "../apis/CategoryAPIs";

export const CategoryDashboard = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCategories, setTotalCategories] = useState();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: 0,
  });
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);

  const handleCreateModalOpen = () => {
    setCreateModalVisible(true);
  };

  const fetchActiveCategories = async () => {
    try {
      const response = await getActiveCategories();
      setActiveCategories(response.data.data);
      setTotalCategories(response.data.data.length);
      setPagination({
        ...pagination,
        total: response.data.data.length,
      });
    } catch (error) {
      setError("Failed to fetch active categories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActiveCategories();
  }, []);
  const handleSortToggle = () => {
    setSortOrder(sortOrder === "ascend" ? "descend" : "ascend");
    const sortedData = [...activeCategories].reverse();
    setActiveCategories(sortedData);
  };
  const handleTableChange = (pagination, filters, sorter) => {
    setPagination({
      ...pagination,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });

    if (sorter && sorter.order) {
      setSortOrder(sorter.order);
      const sortedData = [...activeCategories].sort((a, b) => {
        if (sorter.order === "ascend") {
          return a[sorter.field] > b[sorter.field] ? 1 : -1;
        } else {
          return a[sorter.field] < b[sorter.field] ? 1 : -1;
        }
      });
      setActiveCategories(sortedData);
    }
  };

  const handleUpdateClick = (category) => {
    setSelectedCategory(category);
    setUpdateModalVisible(true);
  };

  const handleUpdate = () => {
    fetchActiveCategories();
  };

  const showDeleteConfirm = (categoryId) => {
    Modal.confirm({
      title: "Delete Category",
      content:
        "Do you want to delete this category permanently, disable it, or cancel?",
      okText: "Delete Permanently",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          setLoading(true);
          await destroyCategory(categoryId);
          message.success("Category deleted permanently");
          fetchActiveCategories();
        } catch (error) {
          message.error("Failed to delete category permanently");
        } finally {
          setLoading(false);
        }
      },
      onCancel: () => {},
      okButtonProps: {
        style: { display: "none" },
      },
      footer: [
        <Button
          key="delete"
          type="danger"
          onClick={async () => {
            try {
              setLoading(true);
              await destroyCategory(categoryId);
              message.success("Category deleted permanently");
              fetchActiveCategories();
              Modal.destroyAll();
            } catch (error) {
              message.error("Failed to delete category permanently");
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
              await disableCategory(categoryId);
              message.success("Category disabled successfully");
              fetchActiveCategories();
              Modal.destroyAll();
            } catch (error) {
              message.error("Failed to disable category");
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
      title: "Status",
      dataIndex: "status",
      key: "status",
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
        <>
          <Space size="large">
            <Button onClick={() => handleUpdateClick(record)}>Update</Button>
            <Button onClick={() => showDeleteConfirm(record.id)}>Delete</Button>
          </Space>
        </>
      ),
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1 style={{ textAlign: "center" }}>List Categories</h1>
        <Button
          type="primary"
          onClick={handleCreateModalOpen}
          style={{ marginBottom: 16, marginRight: "10px" }}
        >
          Create New Category
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setLoading(true);
            fetchActiveCategories();
          }}
          style={{ marginBottom: 16 }}
        >
          Refresh
        </Button>
        <Button onClick={handleSortToggle} style={{ marginLeft: "10px" }}>
          {sortOrder === "ascend" ? "Sort Descending" : "Sort Ascending"}
        </Button>
        <div style={{ marginBottom: 16 }}>
          Total Categories: {totalCategories}
        </div>
        {loading ? (
          <Skeleton active />
        ) : (
          <Table
            dataSource={activeCategories}
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
        <UpdateCategory
          visible={updateModalVisible}
          onClose={() => setUpdateModalVisible(false)}
          category={selectedCategory}
          onUpdate={handleUpdate}
        />
        <CreateCategory
          visible={createModalVisible}
          onClose={() => setCreateModalVisible(false)}
          onCreate={handleUpdate}
        />
      </Col>
    </Row>
  );
};
import { useEffect, useState } from "react";
import { getInactiveCategories, updateCategory } from "../apis/CategoryAPIs";
import { Button, Col, Row, Skeleton, Space, Table, message } from "antd";
import { convertDateToDDMMYYYY } from "../../../utils/date.utils";

export const CategoryInActive = () => {
  const [inactiveCategories, setInactiveCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: 0,
  });

  const fetchInactiveCategories = async () => {
    try {
      const response = await getInactiveCategories();
      setInactiveCategories(response.data.data);
      setPagination({
        ...pagination,
        total: response.length,
      });
    } catch (error) {
      setError("Failed to fetch inactive categories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInactiveCategories();
  }, []);

  const handleTableChange = (pagination) => {
    setPagination({
      ...pagination,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  const handleEnableCategory = async (categoryId) => {
    try {
      setLoading(true);
      await updateCategory(categoryId, { status: 1 });
      message.success("Category enabled successfully");
      fetchInactiveCategories();
    } catch (error) {
      message.error("Failed to enable category");
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
      title: "Description",
      dataIndex: "description",
      key: "description",
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
          <Button onClick={() => handleEnableCategory(record.id)}>
            Enable
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1 style={{ textAlign: "center" }}>Inactive Categories</h1>
        <Button
          type="primary"
          onClick={() => {
            setLoading(true);
            fetchInactiveCategories();
          }}
          style={{ marginBottom: 16 }}
        >
          Refresh
        </Button>
        {loading ? (
          <Skeleton active />
        ) : (
          <Table
            dataSource={inactiveCategories}
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
      </Col>
    </Row>
  );
};
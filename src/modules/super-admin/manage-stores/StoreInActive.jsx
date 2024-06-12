import { useEffect, useState } from "react";
import { getInactiveStores, updateStore } from "../apis/StoreAPIs";
import { Button, Col, Row, Skeleton, Space, Table, message } from "antd";
import { convertDateToDDMMYYYY } from "../../../utils/date.utils";

export const StoreInActive = () => {
  const [inactiveStores, setInactiveStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: 0,
  });

  const fetchInactiveStores = async () => {
    try {
      const response = await getInactiveStores();
      setInactiveStores(response.data.data);
      setPagination({
        ...pagination,
        total: response.length,
      });
    } catch (error) {
      setError("Failed to fetch inactive stores.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInactiveStores();
  }, []);

  const handleTableChange = (pagination) => {
    setPagination({
      ...pagination,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  const handleEnableStore = async (storeId) => {
    try {
      setLoading(true);
      await updateStore(storeId,{"status":1});
      message.success("Store enabled successfully");
      fetchInactiveStores();
    } catch (error) {
      message.error("Failed to enable store");
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
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
          <Button onClick={() => handleEnableStore(record.id)}>Enable</Button>
        </Space>
      ),
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1 style={{ textAlign: "center" }}>Inactive Stores</h1>
        <Button
          type="primary"
          onClick={() => {
            setLoading(true);
            fetchInactiveStores();
          }}
          style={{ marginBottom: 16 }}
        >
          Refresh
        </Button>
        {loading ? (
          <Skeleton active />
        ) : (
          <Table
            dataSource={inactiveStores}
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

import { Button, Col, Row, Skeleton, Space, Table, message } from "antd";
import { useEffect, useState } from "react";
import { convertDateToDDMMYYYY } from "../../../utils/date.utils";
import { getUserDataInactive, updateUser } from "../apis/UserAPIs";

export const UserDisabled = () => {
  const [inactiveUsers, setInactiveUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: 0,
  });

  const fetchInactiveUsers = async () => {
    try {
      const response = await getUserDataInactive();
      setInactiveUsers(response.data.data);
      setPagination({
        ...pagination,
        total: response.length,
      });
    } catch (error) {
      setError("Failed to fetch inactive users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInactiveUsers();
  }, []);

  const handleTableChange = (pagination) => {
    setPagination({
      ...pagination,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  const handleEnableUser = async (userId) => {
    try {
      setLoading(true);
      await updateUser(userId,{"status":1});
      message.success("User enabled successfully");
      fetchInactiveUsers();
    } catch (error) {
      message.error("Failed to enable user");
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
          <Button onClick={() => handleEnableUser(record.id)}>Enable</Button>
        </Space>
      ),
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1 style={{ textAlign: "center" }}>Inactive Users</h1>
        <Button
          type="primary"
          onClick={() => {
            setLoading(true);
            fetchInactiveUsers();
          }}
          style={{ marginBottom: 16 }}
        >
          Refresh
        </Button>
        {loading ? (
          <Skeleton active />
        ) : (
          <Table
            dataSource={inactiveUsers}
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

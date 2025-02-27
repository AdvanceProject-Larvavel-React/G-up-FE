import { Button, Col, Modal, Row, Skeleton, Space, Table, message } from "antd";
import { useEffect, useState } from "react";
import { convertDateToDDMMYYYY } from "../../../utils/date.utils";
import { destroyUser, disableUser, getUserDataActive } from "../apis/UserAPIs";
import { UpdateUser } from "./components/UpdateUser";

export const UserDashboard = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalUsers, setTotalUsers] = useState();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: 0,
  });
  const [sortOrder, setSortOrder] = useState(null);
  const [imagePreviewVisible, setImagePreviewVisible] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const fetchActiveUsers = async () => {
    try {
      const response = await getUserDataActive();
      setActiveUsers(response.data.data);
      setTotalUsers(response.data.data.length);
      setPagination({
        ...pagination,
        total: response.data.data.length,
      });
    } catch (error) {
      setError("Failed to fetch active users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActiveUsers();
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination({
      ...pagination,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });

    if (sorter && sorter.order) {
      setSortOrder(sorter.order);
      const sortedData = [...activeUsers].sort((a, b) => {
        if (sorter.order === "ascend") {
          return a[sorter.field] > b[sorter.field] ? 1 : -1;
        } else {
          return a[sorter.field] < b[sorter.field] ? 1 : -1;
        }
      });
      setActiveUsers(sortedData);
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
    const sortedData = [...activeUsers].reverse();
    setActiveUsers(sortedData);
  };

  const handleUpdateClick = (user) => {
    setSelectedUser(user);
    setUpdateModalVisible(true);
  };

  const handleUpdate = () => {
    fetchActiveUsers();
  };
  const showDeleteConfirm = (userId) => {
    Modal.confirm({
      title: "Delete User",
      content:
        "Do you want to delete this user permanently, block them, or cancel?",
      okText: "Delete Permanently",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          setLoading(true);
          await destroyUser(userId);
          message.success("User deleted permanently");
          fetchActiveUsers();
        } catch (error) {
          message.error("Failed to delete user permanently");
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
              await destroyUser(userId);
              message.success("User deleted permanently");
              fetchActiveUsers();
              Modal.destroyAll();
            } catch (error) {
              message.error("Failed to delete user permanently");
            } finally {
              setLoading(false);
            }
          }}
        >
          <Button style={{ backgroundColor: "red" }}>Delete Permanently</Button>
        </Button>,
        <Button
          key="block"
          type="primary"
          style={{marginRight:"15px"}}
          onClick={async () => {
            try {
              setLoading(true);
              await disableUser(userId);
              message.success("User blocked successfully");
              fetchActiveUsers();
              Modal.destroyAll();
            } catch (error) {
              message.error("Failed to block user");
            } finally {
              setLoading(false);
            }
          }}
        >
          Block
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
      title: "Address",
      dataIndex: "address",
      key: "address",
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
      title: "Password",
      dataIndex: "password",
      key: "password",
      render: () => "*******",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => (
        <img
          src={avatar}
          alt="Avatar"
          style={{
            width: 50,
            height: 50,
            borderRadius: "10px",
            border: "1px solid grey",
          }}
          onClick={() => handlePreviewImage(avatar)}
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
        <h1 style={{ textAlign: "center" }}>List User</h1>
        <Button
          type="primary"
          onClick={() => {
            setLoading(true);
            fetchActiveUsers();
          }}
          style={{ marginBottom: 16 }}
        >
          Refresh
        </Button>
        <Button onClick={handleSortToggle} style={{ marginLeft: "10px" }}>
          {sortOrder === "ascend" ? "Sort Descending" : "Sort Ascending"}
        </Button>
        <div style={{ marginBottom: 16 }}>Total Users: {totalUsers}</div>
        {loading ? (
          <Skeleton active />
        ) : (
          <Table
            dataSource={activeUsers}
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
        <UpdateUser
          visible={updateModalVisible}
          onClose={() => setUpdateModalVisible(false)}
          user={selectedUser}
          onUpdate={handleUpdate}
        />
      </Col>
    </Row>
  );
};

import { Button, Form, Input, Modal, Upload } from "antd";
import { useState } from "react";
import { getURL } from "../../apis/UploadAPIs";
import { updateUser } from "../../apis/UserAPIs";

export const UpdateUer = ({ visible, onClose, user, onUpdate }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState();
  const token = localStorage.getItem("token");
  const handleOnchangeFileAvatar = async (file) => {
    setLoading(true);
    if (!file) return;
    try {
      const urlResponse = await getURL({ media: file });
      const imageUrl = urlResponse.data.url;
      setAvatar(imageUrl);
      console.log(imageUrl);
    } catch (error) {
      console.error("Error uploading avatar:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFinish = async (values) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("address", values.address);
      formData.append("phone", values.phone);

      if (values.oldPassword && values.newPassword) {
        formData.append("password", values.newPassword);
      }

      if (avatar) {
        formData.append("avatar", avatar);
      }
      await updateUser(user.id, values, token);
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Failed to update user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      title="Update User"
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={() => form.submit()}
        >
          Update
        </Button>,
      ]}
    >
      <Form form={form} initialValues={user} onFinish={handleFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="oldPassword" label="Old Password">
          <Input.Password />
        </Form.Item>
        <Form.Item name="newPassword" label="New Password">
          <Input.Password />
        </Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="media" label="Avatar">
          <Upload
            listType="picture"
            maxCount={1}
            beforeUpload={() => false}
            onChange={(info) => handleOnchangeFileAvatar(info.file)}
          >
            <Button>Select Image</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

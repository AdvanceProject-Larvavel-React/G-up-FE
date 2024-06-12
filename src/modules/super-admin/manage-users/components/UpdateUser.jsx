import { Button, Input, Modal, Upload } from "antd";
import { useEffect, useState } from "react";
import { getURL } from "../../apis/UploadAPIs";
import { updateUser } from "../../apis/UserAPIs";

export const UpdateUser = ({ visible, onClose, user, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [fileList, setFileList] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address);
      setPhone(user.phone);
    }
  }, [user]);

  const handleOnchangeFileAvatar = async ({ file, fileList }) => {
    setLoading(true);
    if (!file) return;
    try {
      const urlResponse = await getURL({ media: file });
      const imageUrl = urlResponse.data.url;
      setAvatar(imageUrl);
      setFileList([...fileList]);
    } catch (error) {
      console.error("Error uploading avatar:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const updatedData = {};

      if (name !== user.name) updatedData.name = name;
      if (email !== user.email) updatedData.email = email;
      if (address !== user.address) updatedData.address = address;
      if (phone !== user.phone) updatedData.phone = phone;
      if (avatar) updatedData.avatar = avatar;

      if (Object.keys(updatedData).length === 0) {
        setLoading(false);
        onClose();
        return;
      }

      await updateUser(user.id, updatedData, token);
      onUpdate();
      onClose();
      resetFormData(); 
    } catch (error) {
      console.error("Failed to update user:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetFormData = () => {
    setName(user.name);
    setEmail(user.email);
    setAddress(user.address);
    setPhone(user.phone);
    setAvatar(null);
    setFileList([]);
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
          onClick={handleUpdate}
        >
          Update
        </Button>,
      ]}
    >
      <div>
        <label>Name</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div>
        <label>Address</label>
        <Input value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Phone</label>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <br />

      <div>
        <label>Avatar</label>
        <Upload
          listType="picture"
          maxCount={1}
          beforeUpload={() => false}
          fileList={fileList}
          onChange={handleOnchangeFileAvatar}
        >
          <Button
          style={{marginLeft:"10px"}}>
            Select Image
          </Button>
        </Upload>
      </div>
    </Modal>
  );
};
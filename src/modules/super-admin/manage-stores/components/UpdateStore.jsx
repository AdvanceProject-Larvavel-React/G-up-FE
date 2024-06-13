import { Button, Input, Modal, Upload } from "antd";
import { useEffect, useState } from "react";
import { getURL } from "../../apis/UploadAPIs";
import { updateStore } from "../../apis/StoreAPIs";

export const UpdateStore = ({ visible, onClose, store, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [fileList, setFileList] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (store) {
      setName(store.name);
      setEmail(store.email);
      setAddress(store.address);
      setPhone(store.phone);
      setDescription(store.description);
    }
  }, [store]);

  const handleOnChangeFileAvatar = async ({ file, fileList }) => {
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

      if (name !== store.name) updatedData.name = name;
      if (email !== store.email) updatedData.email = email;
      if (address !== store.address) updatedData.address = address;
      if (phone !== store.phone) updatedData.phone = phone;
      if (description !== store.description) updatedData.description = description;
      if (avatar) updatedData.avatar = avatar;

      if (Object.keys(updatedData).length === 0) {
        setLoading(false);
        onClose();
        return;
      }

      await updateStore(store.id, updatedData, token);
      onUpdate();
      onClose();
      resetFormData(); 
    } catch (error) {
      console.error("Failed to update store:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetFormData = () => {
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
    setDescription("");
    setAvatar(null);
    setFileList([]);
  };

  return (
    <Modal
      visible={visible}
      title="Update Store"
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
      <div>
        <label>Description</label>
        <Input.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
      </div>
      <br />

      <div>
        <label>Avatar</label>
        <Upload
          listType="picture"
          maxCount={1}
          beforeUpload={() => false}
          fileList={fileList}
          onChange={handleOnChangeFileAvatar}
        >
          <Button style={{ marginLeft: "10px" }}>
            Select Image
          </Button>
        </Upload>
      </div>
    </Modal>
  );
};

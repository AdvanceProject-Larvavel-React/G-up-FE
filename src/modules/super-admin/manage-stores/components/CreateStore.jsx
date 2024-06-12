import { Button, Input, Modal, Upload, message } from "antd";
import { useState } from "react";
import { getURL } from "../../apis/UploadAPIs";
import { createStore } from "../../apis/StoreAPIs";

export const CreateStore = ({ visible, onClose, onCreate }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [fileList, setFileList] = useState([]);

  const handleOnChangeFileAvatar = async ({ file, fileList }) => {
    try {
      setLoading(true);
      if (!file) return;
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

  const handleCreate = async () => {
    try {
      setLoading(true);
      if (!name || !email || !address || !phone) {
        message.error("Please fill in all required fields.");
        return;
      }

      const newStoreData = {
        name,
        email,
        address,
        phone,
        description,
        avatar,
      };

      await createStore(newStoreData);
      onCreate();
      onClose();
      resetFormData();
    } catch (error) {
      console.error("Failed to create store:", error);
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
      title="Create Store"
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleCreate}
        >
          Create
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
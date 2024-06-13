import { Button, Input, Modal, Upload } from "antd";
import { useState, useEffect } from "react";
import { updateProduct } from "../../api/ProductApis";
import { getURL } from "../../api/GetImageURL";

export const UpdateProduct = ({ visible, onClose, product, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file_paths, setImage] = useState("");
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setImage(product.file_paths);
    }
  }, [product]);

  const handleOnChangeFileImage = async ({ file, fileList }) => {
    setLoading(true);
    if (!file) return;
    try {
      const urlResponse = await getURL({ media: file });
      const imageUrl = urlResponse.data.url;
      setImage(imageUrl);
      setFileList([...fileList]);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const updatedData = {
        name,
        description,
        price,
        file_paths,
      };
      if (file_paths !== product.file_paths) {
        updatedData.file_paths = file_paths;
      }
      await updateProduct(product.id, updatedData); 

      onUpdate({ ...product, ...updatedData });

      onClose();
    } catch (error) {
      console.error("Failed to update product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      title="Update Product"
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
        <label>Description</label>
        <Input.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Price</label>
        <Input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
        />
      </div>
      <br />
      <div>
        <label>Image</label>
        {file_paths && (
          <img
            src={file_paths}
            alt="Product"
            style={{ width: 100, height: 100, marginBottom: 10 }}
          />
        )}
        <Upload
          listType="picture"
          maxCount={1}
          beforeUpload={() => false}
          fileList={fileList}
          onChange={handleOnChangeFileImage}
        >
          <Button>Select Image</Button>
        </Upload>
      </div>
    </Modal>
  );
};
import { Button, Input, Modal, Upload } from "antd";
import { useState } from "react";
import { updateProduct } from "../apis/ProductAPIs";

export const UpdateProduct = ({ visible, onClose, product, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      // Prepare updated product data
      const updatedData = {
        name,
        description,
        price,
        image,
      };

      // Call API to update the product
      await updateProduct(product.id, updatedData);
      
      // Update the product in the parent component
      onUpdate({ ...product, ...updatedData });

      // Close the modal
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
        {image && (
          <img
            src={image}
            alt="Product"
            style={{ width: 100, height: 100, marginBottom: 10 }}
          />
        )}
        <Upload
          beforeUpload={() => false}
          fileList={[]}
          onChange={(info) => {
            const { status, originFileObj } = info.file;
            if (status === "done") {
              const reader = new FileReader();
              reader.onload = (e) => setImage(e.target.result);
              reader.readAsDataURL(originFileObj);
            }
          }}
        >
          <Button>Select Image</Button>
        </Upload>
      </div>
    </Modal>
  );
};

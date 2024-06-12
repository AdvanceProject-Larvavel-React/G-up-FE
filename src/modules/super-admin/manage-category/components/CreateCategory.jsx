import { Button, Input, Modal, message } from "antd";
import { useState } from "react";
import { createCategory } from "../../apis/CategoryAPIs";

export const CreateCategory = ({ visible, onClose, onCreate }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = async () => {
    if (!name) {
      message.error("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      const newCategoryData = { name, description, "status":1 };
      await createCategory(newCategoryData);

      message.success("Category created successfully.");
      resetFormData();
      onCreate();
      onClose();
    } catch (error) {
      console.error("Failed to create category:", error);
      message.error("Failed to create category.");
    } finally {
      setLoading(false);
    }
  };

  const resetFormData = () => {
    setName("");
    setDescription("");
  };

  const handleCancel = () => {
    resetFormData();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      title="Create Category"
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
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
        <label>Description</label>
        <Input.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
      </div>
    </Modal>
  );
};

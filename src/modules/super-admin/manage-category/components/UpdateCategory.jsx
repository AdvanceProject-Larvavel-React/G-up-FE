import { Button, Input, Modal, message } from "antd";
import { useEffect, useState } from "react";
import { updateCategory } from "../../apis/CategoryAPIs";

export const UpdateCategory = ({ visible, onClose, category, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (category) {
      setName(category.name);
      setDescription(category.description);
    }
  }, [category]);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      if (!name) {
        message.error("Please fill in all required fields.");
        return;
      }

      const updatedCategoryData = {
        name,
        description,
      };

      await updateCategory(category.id, updatedCategoryData);
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Failed to update category:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      title="Update Category"
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
          rows={4}
        />
      </div>
    </Modal>
  );
};

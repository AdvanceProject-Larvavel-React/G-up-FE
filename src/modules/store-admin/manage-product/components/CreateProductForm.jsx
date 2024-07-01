import { Button, Form, Input, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/ProductApis";
import axios from "axios";

const CreateProductForm = ({ onSubmit, onCancel }) => {
  const [form] = Form.useForm();
  const [listCategory, setListCategory] = useState([]);
  const [error, setError] = useState(null);
  const [storeId, setStoreId] = useState(null);
  const token = localStorage.getItem("token");
  const onFinish = (values) => {
    const formData = { ...values, store_id: storeId };
    onSubmit(formData);
    // onSubmit(values);
    console.log(error);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllCategories();

        const dataSelected = data.data.data.map((item) => {
          return {
            value: item.id,
            label: item.name,
          };
        });

        setListCategory(dataSelected);
      } catch (err) {
        setError(err.message);
      }
    };
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = response.data.data;
        const storeId = userData.store_id; // Assuming store_id is part of userData
        setStoreId(storeId);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
    fetchProducts();
  }, [token]);
  const handleChangeSelect = (value) => {
    form.setFieldsValue({ category_id: value });
  };
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please enter product name" }]}
      >
        <Input placeholder="Please enter product name" />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          { required: true, message: "Please enter product description" },
        ]}
      >
        <Input.TextArea placeholder="Please enter product description" />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: "Please enter product price" }]}
      >
        <Input placeholder="Please enter product price" type="number" />
      </Form.Item>
      <Form.Item
        name="quantity"
        label="Quantity"
        rules={[{ required: true, message: "Please enter product quantity" }]}
      >
        <Input placeholder="Please enter product quantity" type="number" />
      </Form.Item>
      <Form.Item
        name="category_id"
        label="Category"
        rules={[{ required: true, message: "Please select product category" }]}
      >
        <Select
          placeholder="Please select Category"
          onChange={handleChangeSelect}
          options={listCategory}
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default CreateProductForm;

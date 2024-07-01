import { useEffect, useState } from "react";
import StatCard from "./components/StatCard";
import PieChart from "./components/PieChart";
import { getActiveProducts, getAllCategories } from "../api/ProductApis";

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(loading);
  useEffect(() => {
    fetchProductStats();
    fetchCategories();
  }, []);

  const fetchProductStats = async () => {
    try {
      const response = await getActiveProducts();
      setTotalProducts(response.data.data.length);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product stats:", error);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="stats-cards" style={{ display: "flex", marginBottom: "20px" }}>
        <StatCard title="Total Products" count={totalProducts} />
        <StatCard title="Total Categories" count={categories.length} />
      </div>
      <hr />
      <div className="charts" style={{ display: "flex", justifyContent: "space-around" }}>
        <PieChart
          data={[totalProducts, categories.length]}
          labels={["Total Products", "Total Categories"]}
        />
      </div>
    </div>
  );
};

export default Dashboard;

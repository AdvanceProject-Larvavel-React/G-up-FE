import { useEffect, useState } from "react";
import { getAllCategories } from "../apis/CategoryAPIs";
import { getActiveStores, getInactiveStores } from "../apis/StoreAPIs";
import { getUserDataActive, getUserDataInactive } from "../apis/UserAPIs";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import StatCard from "./components/StatCard";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [activeStores, setActiveStores] = useState([]);
  const [inactiveStores, setInactiveStores] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [inactiveUsers, setInactiveUsers] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchStores();
    fetchUsers();
  }, []);

  const fetchCategories = async () => {
    const allCategories = await getAllCategories();
    setCategories(allCategories.data.data);
  };

  const fetchStores = async () => {
    const active = await getActiveStores();
    const inactive = await getInactiveStores();
    setActiveStores(active.data.data);
    setInactiveStores(inactive.data.data);
  };

  const fetchUsers = async () => {
    const active = await getUserDataActive();
    const inactive = await getUserDataInactive();
    setActiveUsers(active.data.data);
    setInactiveUsers(inactive.data.data);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="stats-cards" style={{ display: "flex" }}>
        <StatCard title="Total Categories" count={categories.length} />
        <StatCard title="Active Stores" count={activeStores.length} />
        <StatCard title="Inactive Stores" count={inactiveStores.length} />
        <StatCard title="Active Users" count={activeUsers.length} />
        <StatCard title="Inactive Users" count={inactiveUsers.length} />
      </div>
      <hr />
      <div
        className="charts"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <PieChart
          data={[activeStores.length, inactiveStores.length]}
          labels={["Active Stores", "Inactive Stores"]}
        />
        <BarChart
          data={[activeUsers.length, inactiveUsers.length]}
          labels={["Active Users", "Inactive Users"]}
        />
      </div>
    </div>
  );
};

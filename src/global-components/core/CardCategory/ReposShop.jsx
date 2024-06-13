import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardShop from "./Category";

const Repos = () => {
  const { id } = useParams();
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCardShop = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/store/get/active/${id}`
      );

      setStoreData(response.data.data);

      setLoading(false);
    } catch (error) {
      setError("Error fetching card data");
      setLoading(false);
    }
    console.log(setStoreData);
  };

  useEffect(() => {
    getCardShop(id);
    console.log(storeData);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Fragment>
      {storeData.map((item) => (
        <CardShop key={item.id} data={item} />
      ))}
    </Fragment>
  );
};

export default Repos;

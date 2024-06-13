import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardStore from "../CardStore/CardStore";

const Repos = () => {
  const { id } = useParams();
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCard = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/product/get/active"
      );
      setStoreData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching card data");
      setLoading(false);
    }
  };

  useEffect(() => {
    getCard(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Go Back
      </Link>
      <div className="card-container">
        {storeData.map((item) => (
          <CardStore key={item.id} data={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default Repos;

import { Link, useParams } from "react-router-dom";
import CategoryData from "./__mock__/CategoryData";
import "./styles/DetailCategory.css";
import { FaChevronLeft } from "react-icons/fa";
const CategoryDetail = () => {
  const { id } = useParams();
  const category = CategoryData.find((item) => {
    return item.id == id;
  });
  return (
    <>
      <Link to={`/support`} className="category-link">
        <FaChevronLeft className="back" size={24} />
      </Link>
      <div className="detailCa">
        <img src={category.image} alt={category.title} />
        <h2>{category.title}</h2>
        <p>Details about {category.title}</p>
        <div className="text1">
          <div className="textChild">
            <p className="deText">{category.descriptions}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryDetail;
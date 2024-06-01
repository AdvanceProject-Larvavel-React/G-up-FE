
import { useParams } from 'react-router-dom';
import CategoryData from './__mock__/CategoryData';
import './styles/detailCategory.css';


const CategoryDetail = () => {
  const { id } = useParams();
  const category = CategoryData.find(item => {
    return item.id == id;
  });
  return (
    <div className='detailCa'>
      <img src={category.image} alt={category.title} />
      <h2>{category.title}</h2>
      <p>Details about {category.title}</p>  
      <div className='text1'>
  <div className='textChild'>
    <p className='deText'>{category.descriptions}</p>
  </div>
</div>

    </div>
  );
};

export default CategoryDetail;

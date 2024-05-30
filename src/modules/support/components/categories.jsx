import PropTypes from 'prop-types'
const Categories = (props) => {
    const { image, title } = props.data;
    return (
     <div className="category-item">
      <img  src={image} alt={title} className="category-image" />
      <a href='#' className="category-title">{title}</a>
    </div>
    );
};
Categories.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
}
export default Categories;
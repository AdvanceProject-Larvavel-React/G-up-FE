
import "../styles/Banner.css";

const BannerList = (props) => {
  const a = props.data;
  console.log(a);
  return (
    <div>
      {a.map((banner) => (
        <img key={1} className="image" src={banner.img} alt={banner.name} />
      ))}
    </div>
  );
};

export default BannerList;

import "../../styles/Voucher.css";
function Voucher() {
    return (
      <div className="voucher">
        <h3 className="voucher__title">Shop`s Voucher</h3>
        <div className="voucher__discounts">
          <button className="voucher__button">15% off</button>
          <button className="voucher__button">15k</button>
          <button className="voucher__button">20% off</button>
        </div>
      </div>
    );
  }
  
  export default Voucher;
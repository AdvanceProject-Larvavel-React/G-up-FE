
import '../styles/NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <ul className="nav-items">
                <li className="nav-item active">SHOP</li>
                <li className="nav-item">PRODUCT</li>
                <li className="nav-item">PRODUCT LIST</li>
                <li className="nav-item">LIVE</li>
            </ul>
        </div>
    );
};

export default NavigationBar;
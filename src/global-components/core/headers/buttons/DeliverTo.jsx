import { Card } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import './DeliverTo.css';

const DeliverTo = () => {
    return (
        <Card className="deliver-to-card">
            <EnvironmentOutlined className="deliver-to-icon" />
            <div className="deliver-to-text">
                <span className="deliver-to-label">Deliver To</span>
                <span className="deliver-to-country">Vietnam</span>
            </div>
        </Card>
    );
};
export default DeliverTo;
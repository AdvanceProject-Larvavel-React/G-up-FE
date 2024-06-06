import styled from 'styled-components';
import { Switch } from 'antd';

const ShoppingBagContainer = styled.div`
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    .free-shipping {
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 4px;
        padding: 12px;
        font-size: 14px;
        color: #333;

        .icon {
            margin-right: 8px;
            color: #4CAF50;
        }

        p {
            margin: 20px;
        }
    }
`;

export const ShopBag = ({ total }) => {
    console.log(total);
    return (
        <ShoppingBagContainer>
            <h2 className="title">My Shopping Bag ({total} Items)</h2>
            <div className="free-shipping">
                <Switch defaultChecked />
                <p>  FREE ground shipping</p>
            </div>
        </ShoppingBagContainer>
    );
}
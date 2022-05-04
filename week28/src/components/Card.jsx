import React, { useState } from 'react';

import { Card, Col } from 'antd';
import './Card.scss';

// const { Meta } = Card;
function CardTariffs(props) {
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
    }
    return (
        <Col span={6}>
            <Card hoverable onClick={handleChange} bodyStyle={{ border: pressed && "3px solid rgb(15, 0, 0)" }} cover={<div className={props.colorBG}>
                <h1 className='cardTitle'>{props.name}</h1>
                <hr />
                <div className='cardPrice'>{props.price}</div>
            </div>}
                className='card-body'
            >
                <div className='cardSpeed'>{props.speed}</div>
                <div className='cardDetails'>{props.details}</div>
            </Card>
        </Col>

    )
}

export default CardTariffs;
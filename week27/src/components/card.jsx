import React from 'react';

import { Card, Col } from 'antd';
import './Card.scss';

const { Meta } = Card;
function CardTariffs(props) {
    return (
        <Col span={6}>
            <Card hoverable bodyStyle={{ border: props.isSelected && "5px solid rgb(180, 216, 245)" }} cover={<div className={props.colorBG}>
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
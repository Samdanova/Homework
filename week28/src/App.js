import React from 'react';
import 'antd/dist/antd.min.css';
import { Row } from 'antd';
import './App.css';
import CardTariffs from './components/Card';

const tariffs = [
    {
        name: "Безлимитный 300",
        price: "300 руб/мес",
        speed: "до 10 Мбит/сек",
        details: "Объем включенного трафика не ограничен",
        colorBG:"blue",
    }, {
        name: "Безлимитный 450",
        price: "450 руб/мес",
        speed: "до 50 Мбит/сек",
        details: "Объем включенного трафика не ограничен",
        colorBG:"green",
    }, {
        name: "Безлимитный 550",
        price: "550 руб/мес",
        speed: "до 100 Мбит/сек",
        details: "Объем включенного трафика не ограничен",
        colorBG:"red"
    }, {
        name: "Безлимитный 1000",
        price: "1000 руб/мес",
        speed: "до 200 Мбит/сек",
        details: "Объем включенного трафика не ограничен",
        colorBG:"black"
    }
]

function App() {
    return (
        <div className="site-card-border-less-wrapper">
            <Row>
                {
                    tariffs.map(
                        (tariff) => <CardTariffs
                            name={tariff.name}
                            price={tariff.price}
                            speed={tariff.speed}
                            details={tariff.details}
                            colorBG={tariff.colorBG}></CardTariffs>
                    )
                }
            </Row>
        </div>
    );
}

export default App;

import React from 'react';
import './superhero.css';

function Superhero(props) {
    return (
        <div className="super">
            <h1>{props.name}</h1>
            <div className='naming'>Вселенная: {props.universe}</div>
            <div className='naming'>Альтер эго: {props.alter}</div>
            <div className='naming'>Деятельность: {props.action}</div>
            <div className='naming'>Друзья: {props.friends}</div>
            <div className='naming'>Суперсилы: {props.superpowers}</div>
            <img className='supermanImg' src={props.url} />
        </div>
    )
}

export default Superhero;
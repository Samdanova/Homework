import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);
    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
    });
    return (
        <button onClick={() => setCount(count + 1)}>{count}</button>
    );
}


// class Counter extends React.Component {
//     state = {
//         count: 0
//     };
//     handleClick = () => {
//         this.setState(({ count }) => ({
//             count: count + 1
//         }));
//     };
//     render() {
//         return <button onClick={this.handleClick}>{this.state.count}</button>;
//     }
// }

export default Counter;
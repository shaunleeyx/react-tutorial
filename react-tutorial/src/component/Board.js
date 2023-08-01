import React from 'react'

function Square() {
    const [value,setValue] = React.useState(null);
    function handleClick() {
        setValue('X')
    }
    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    );
}
const board = () => {
    return (
        <>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
        </>
    );
};

export default board;
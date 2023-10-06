import React from "react";

export const Card = ({ ism, familya, id, setData }) => {
    const del = () => {
        setData((p) => p.filter((item) => item.id !== id));
    }
    return (
        <>
            <div>
                <h2>{ism}</h2>
                <h3>{familya}</h3>
                <button onClick={del}>del</button>

            </div>


        </>
    )
}
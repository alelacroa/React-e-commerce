import React from 'react';
import './ItemList.css'

export default function ItemList({ id, title, pictureUrl, btn, stock }) {
    return (
        <div className="card"><h1 className="title-card" key={id}>{title}</h1><img className="cardImg" src={pictureUrl} /> <button className="btn-detail">{btn}</button> <h2 className="title-stock">{stock}</h2> </div>
    )
}

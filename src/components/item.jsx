import React from 'react';
import DOMPurify from 'dompurify';
import '@styles/item.scss'

const Item = ({ info }) => {
    
    const handlerImage = (url) => {
        const image = require(`@images/${url}`);
        return image;
    }

    return (
        <div className="item">
            <img className="item-image" src={handlerImage(info.image)} alt={info.alt}/>
            <h3 className="item-title">{info.title}</h3>
            <p className="item-paragraph" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(info.paragraph)}}></p>
        </div>
    );
}

export default Item;
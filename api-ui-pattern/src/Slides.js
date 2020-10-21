import React from 'react';

function Slides(props) {
    let imageUrl = props.content.image;

    return (
        <div className="slide-container">
            <p className="count">{props.count} of {props.length}</p>
            <h2 className="title">{props.content.title}</h2>
            <h4 className="meal">{props.content.cuisine}</h4>
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="recipe">{props.content.recipe}</div>
        </div>
    )
}

export default Slides;
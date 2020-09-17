import React from "react";
import trashPath from "../../images/trash.png";

function Card({ name, likes, url, onCardClick, ...rest }) {
  const handleClick = () => onCardClick({ name, url });
  return (
    <li className="element">
      <img
        src={url}
        className="element__image"
        alt={name}
        onClick={handleClick}
      />
      <div className="element__description">
        <h2 className="element__name">{name}</h2>
        <div className="element__like-counter">
          <button className="element__like"></button>
          <p className="element__like-count">{likes}</p>
        </div>
      </div>
      <button className="element__trash-button popup-image__close-button">
        <img src={trashPath} className="element__trash" alt="trash" />
      </button>
    </li>
  );
}
export default Card;

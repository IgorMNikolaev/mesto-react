import React from "react";

function ImagePopup({ card, onClose, isOpen, ...rest }) {
  return (
    <section className={`popup popup-image ${isOpen}`}>
      <div className="popup__container-image">
        <img className="popup__image" src={card.url} alt={card.name} />
        <h3 className="popup__name">{card.name}</h3>
        <button
          className="popup__close-button popup-image__close-button"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default ImagePopup;

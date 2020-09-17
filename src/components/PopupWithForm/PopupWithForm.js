import React from "react";

function PopupWithForm({ name, title, children, isOpen, onClose, ...rest }) {
  return (
    <>
      <section className={`popup popup${name} ${isOpen}`}>
        <div className="popup__container">
          <h3 className="popup__title">{title}</h3>
          <form className={`popup__form popup__${name}-form`} noValidate>
            {children}
          </form>
          <button className="popup__close-button" onClick={onClose}></button>
        </div>
      </section>
    </>
  );
}

export default PopupWithForm;

import React from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <section className="popup popup-edit">
        <div className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form popup__edit-form" noValidate>
            <div className="popup__input-cover">
              <input
                type="text"
                name="name"
                className="popup__input popup__input-name"
                required
                minLength="2"
                maxLength="40"
              />
              <span className="popup__input-error"></span>
            </div>
            <div className="popup__input-cover">
              <input
                type="text"
                name="description"
                className="popup__input popup__input-description"
                required
                minLength="2"
                maxLength="200"
              />
              <span className="popup__input-error"></span>
            </div>
            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
            <button className="popup__loading" disabled>
              <p className="popup__loading-text">Сохранение...</p>
            </button>
          </form>
          <button className="popup__close-button popup-edit__close-button"></button>
        </div>
      </section>

      <section className="popup popup-add">
        <div className="popup__container">
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form popup__add-form" noValidate>
            <div className="popup__input-cover">
              <input
                type="text"
                name="name"
                className="popup__input popup__input_place"
                placeholder="Название"
                required
                maxLength="30"
              />
              <span className="popup__input-error"></span>
            </div>
            <div className="popup__input-cover">
              <input
                type="url"
                name="image"
                className="popup__input popup__input_image"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error"></span>
            </div>
            <button type="submit" className="popup__submit-button">
              Создать
            </button>
            <button className="popup__loading" disabled>
              <p className="popup__loading-text">Создание...</p>
            </button>
          </form>
          <button className="popup__close-button popup-add__close-button"></button>
        </div>
      </section>

      <section className="popup popup-avatar">
        <div className="popup__container">
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form popup__avatar-form" noValidate>
            <div className="popup__input-cover">
              <input
                type="url"
                name="image"
                className="popup__input popup__input_image"
                placeholder="Ссылка на новый аватар"
                required
              />
              <span className="popup__input-error"></span>
            </div>
            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
            <button className="popup__loading" disabled>
              <p className="popup__loading-text">Сохранение...</p>
            </button>
          </form>
          <button className="popup__close-button popup-avatar__close-button"></button>
        </div>
      </section>

      <section className="popup popup-image">
        <div className="popup__container-image">
          <img className="popup__image" src="#" alt="большая картринка" />
          <h3 className="popup__name">Имя картинки</h3>
          <button className="popup__close-button popup-image__close-button"></button>
        </div>
      </section>

      <section className="popup popup__confirm">
        <div className="popup__container">
          <h3 className="popup__title">Вы уверены?</h3>
          <form className="popup__form popup__confirm-form" noValidate>
            <button type="submit" className="popup__submit-button">
              Да
            </button>
          </form>
          <button className="popup__close-button popup-add__close-button"></button>
        </div>
      </section>
    </>
  );
}

export default App;

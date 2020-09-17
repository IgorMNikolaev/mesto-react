import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ImagePopup from "../ImagePopup/ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  const emptyObj = {};

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="popup-edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm
        name="popup-add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm
        name="popup-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <ImagePopup
        isOpen={"name" in selectedCard ? "popup_opened" : ""}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;

import React from "react";

function Main() {
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__info">
            <button className="profile__avatar-button">
              <div className="profile__avatar-cover"></div>
              <img
                className="profile__avatar"
                src="#"
                alt="фотография профиля"
              />
            </button>
            <div className="profile__text">
              <div className="profile__name-edit">
                <h1 className="profile__name">Жак-Ив-Кусто</h1>
                <button className="profile__edit-button"></button>
              </div>
              <p className="profile__description">Исследователь океана</p>
            </div>
          </div>
          <button className="profile__add-button"></button>
        </section>
        <ul className="elements"></ul>
      </main>
    </>
  );
}

export default Main;

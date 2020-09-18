import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, ...rest }) {
  const [userState, setUserState] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialData()
      .then((response) => {
        const [cardsInfo, profileInfo] = response;
        const { name, about, avatar } = profileInfo;
        const items = cardsInfo.map((item) => ({
          name: item.name,
          likes: item.likes.length,
          url: item.link,
          id: item._id,
        }));
        setCards(items);
        setUserState(name);
        setUserDescription(about);
        setUserAvatar(avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__info">
            <button onClick={onEditAvatar} className="profile__avatar-button">
              <div className="profile__avatar-cover"></div>
              <img
                className="profile__avatar"
                src={userAvatar}
                alt="фотография профиля"
              />
            </button>
            <div className="profile__text">
              <div className="profile__name-edit">
                <h1 className="profile__name">{userState}</h1>
                <button
                  onClick={onEditProfile}
                  className="profile__edit-button"
                ></button>
              </div>
              <p className="profile__description">{userDescription}</p>
            </div>
          </div>
          <button onClick={onAddPlace} className="profile__add-button"></button>
        </section>
        <ul className="elements">
          {cards.map((item) => (
            <Card key={item.id} {...item} {...rest} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default Main;
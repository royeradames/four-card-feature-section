import React from "react";
import "./styles/main.scss";
import data from "./data";

function App() {
  const cardSpecific = (title: string) => {
    switch (title) {
      case "Supervisor":
        return "supervisor";
      case "Team Builder":
        return "team-builder";
      case "Karma":
        return "karma";
      case "calculator":
        return "calculator";
      default:
        return "";
    }
  };
  const cards = (
    cards: {
      title: string;
      message: string;
      icon: string;
      alt: string;
    }[],
    cardSpecific: (
      title: string
    ) => "supervisor" | "team-builder" | "karma" | "calculator" | ""
  ) => {
    return (
      <ul className="cards">
        {cards.map((card) => {
          const cssElementName = cardSpecific(card.title);
          return (
            <li className={`cards__${cssElementName}`}>
              <h3 className="cards__title">{card.title}</h3>
              <p className="cards__message">{card.message}</p>
              <img src={card.icon} alt={card.alt} className="cards__icon" />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <main className="main-container">
      <header className="header">
        <h2 className="header__title">{data.title}</h2>
        <h1 className="header__tag-line">{data.tagLine}</h1>
        <p className="header__leading-message">{data.leadingMessage}</p>
      </header>

      {cards(data.cards, cardSpecific)}
    </main>
  );
}

export default App;

import React from "react";
import "./App.css";
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
      <ul className="card">
        {cards.map((card) => {
          const cssElementName = cardSpecific(card.title);
          return (
            <li className={`card__${cssElementName}`}>
              <h3 className="card__title">{card.title}</h3>
              <p className="card__message">{card.message}</p>
              <img src={card.icon} alt={card.alt} className="card__icon" />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <main>
      <header className="header">
        <h2 className="header__title">{data.title}</h2>
        <h1 className="header__tagLine">{data.tagLine}</h1>
        <p className="header__leading-message">{data.leadingMessage}</p>
      </header>

      {cards(data.cards, cardSpecific)}
    </main>
  );
}

export default App;

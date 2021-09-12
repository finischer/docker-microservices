import React from "react";
import "../css/base.css";

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className="menue-field">
          <a href="/home">Startseite</a>
        </div>
        <div className="menue-field">
          <a href="/product/add">Produkt hinzufügen</a>
        </div>
        <div className="menue-field">
          <a href="/products">Alle Produkte anzeigen</a>
        </div>
      </div>
      <hr />
    </>
  );
}

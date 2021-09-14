import React from "react";

export default function HomePage() {
  return (
    <>
      <h1>Willkommen zur Produktverwaltung</h1>
      <div className="content">
        <p>
          Die Produktverwaltung dient dazu Produkte übersichtlich anzuzeigen und
          zu speichern.
        </p>
        <p>
          Beim Hinzufügen eines Produkts wird sowohl eine eindeutige ID erzeugt
          als auch das Datum dokumentiert, an dem das Produkt hinzugefügt wurde.
          Den Namen beim Anlegen des Produkts können Sie selbst wählen.
        </p>
        <p>
          In der Produktliste können Sie einzelne Produkte anklicken und diese
          entweder bearbeiten oder entfernen.
        </p>
      </div>
    </>
  );
}
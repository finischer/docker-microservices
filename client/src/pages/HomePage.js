import React from "react";

export default function HomePage() {
  return (
    <>
      <h1>Willkommen zur Produkt- und Filmverwaltung</h1>
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
        <p>
          In der Filmverwaltung lassen sich alle ihre Lieblingsfilme speichern.
          Sie können sich alle anzeigen lassen, neue hinzufügen, editieren oder auch wieder entfernen.
          Dies funktioniert analog zur Produktliste.
        </p>

      </div>
    </>
  );
}

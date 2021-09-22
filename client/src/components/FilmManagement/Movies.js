import React from "react";
import Film from "./Film";

export default function Movies({ filmList }) {
  if (filmList?.length === 0) {
    return <h4>Keine Filme gefunden!</h4>;
  } else {
    return (
      <>
        {filmList?.map((film) => (
          <a key={film._id} href={`/film/${film._id}`}>
            <Film film={film} class="product-hover" />
          </a>
        ))}
      </>
    );
  }
}

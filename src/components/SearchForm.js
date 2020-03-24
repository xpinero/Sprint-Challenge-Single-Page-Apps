import React, { useState } from "react";

export default function SearchForm(props) {

  return (
    <section className="search-form">
      Search Here
      <input
        id="search-box"
        value={props.text}
        onChange={e => {
          console.log(e.target.value);
          props.onSearchUpdate(e.target.value);
        }}
      />
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { fruits } from "./data";

export default function FirstTask() {
  const [searchValue, setSearchValue] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  const filteredArray = fruits.filter((fruit) => {
    return fruit.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <input
        value={searchValue}
        onChange={(event) => {
          handleChange(event);
          console.log(filteredArray);
        }}
      />
      <button onClick={() => setSearchValue("")}>Очистить</button>
      {filteredArray.map((element, index) => {
        return (
          <ul key={index}>
            {filteredArray.length === 0 ? (
              <p>Ничего не найдено...</p>
            ) : (
              <li>{element}</li>
            )}
          </ul>
        );
      })}
    </>
  );
}

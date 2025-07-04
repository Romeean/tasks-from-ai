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
    <div className="w-3/4 flex self-center-safe">
      <div>
        <input
          className="border-2"
          value={searchValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(event);
            console.log(filteredArray);
          }}
        />
        <button onClick={() => setSearchValue("")}>Очистити</button>
      </div>
      <div>
        <ul>
          {filteredArray.length === 0 ? (
            <p>Нічого не знайдено...</p>
          ) : (
            filteredArray.map((element, index) => {
              return (
                <li className="w-fit text-4xl" key={index}>
                  {element}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}

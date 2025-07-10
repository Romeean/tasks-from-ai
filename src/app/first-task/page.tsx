"use client";
import { useState, useMemo } from "react";
import { fruits } from "./data";

export default function FirstTask() {
  const [searchValue, setSearchValue] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  const memoFruits = useMemo(() => {
    return fruits.filter((fruit) =>
      fruit.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [fruits, searchValue]);

  function highlightText(text: string, query: string) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ background: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <>
      <div className="w-screen h-screen">
        <div className="flex justify-center-safe">
          <div className="min-w-2/3 max-w-2/3 mt-16">
            <div className="flex flex-row gap-3">
              <input
                className="border rounded-3xl min-w-3/4 pl-3"
                value={searchValue}
                onChange={(event) => {
                  handleChange(event);
                  console.log(memoFruits);
                }}
              />
              <button
                className="border rounded-3xl p-1 transition-all ease-in-out duration-500"
                onClick={() => setSearchValue("")}
                onMouseEnter={(event) => {
                  event.currentTarget.style.background = "black";
                  event.currentTarget.style.color = "white";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background = "white";
                  event.currentTarget.style.color = "black";
                }}
              >
                Очистить
              </button>
            </div>

            <ul>
              {memoFruits.length === 0 ? (
                <p>Ничего не найдено...</p>
              ) : (
                memoFruits.map((element, index) => (
                  <li key={index}>{highlightText(element, searchValue)}</li>
                ))
              )}
            </ul>
            <p>
              Показано: {memoFruits.length} из {fruits.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

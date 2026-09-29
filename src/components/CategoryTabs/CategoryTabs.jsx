import { useState } from "react";
import "./CategoryTabs.css";

const CATEGORIES = [
  "Программирование",
  "Тестирование",
  "DevOps",
  "Аналитика",
  "ИИ",
  "Полный каталог",
];

export default function CategoryTabs() {
  const [active, setActive] = useState("Программирование");

  return (
    <div className="tabs">
      <div className="tabs__list">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`tabs__btn ${active === cat ? "tabs__btn--active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

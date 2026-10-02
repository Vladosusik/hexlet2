import { useState, useEffect } from "react";
import { Moon, Sun, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ dark, onToggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__left">
          <Link to="/" className="header__logo">
            <span>Хекслет</span>
          </Link>
          <nav className="header__nav">


            <div className="header__nav-item">
              <button className="header__nav-btn">
                Все курсы
                <ChevronDown size={14} className="header__chevron" />
              </button>
              <div className="header__dropdown header__dropdown--wide">
                <Link to="/catalog" className="header__dropdown-item header__dropdown-item--all">
                  Все что есть <span className="header__dropdown-badge">130</span>
                </Link>
                <div className="header__dropdown-section">Популярные категории</div>
                <a href="#" className="header__dropdown-item">Курсы по программированию</a>
                <a href="#" className="header__dropdown-item">Курсы по искусственному интеллекту</a>
                <a href="#" className="header__dropdown-item">Курсы по аналитике данных</a>
                <a href="#" className="header__dropdown-item">Курсы по DevOps</a>
                <a href="#" className="header__dropdown-item">Курсы по тестированию</a>
                <div className="header__dropdown-section">Популярные курсы</div>
                <a href="#" className="header__dropdown-item">AI-автоматизация</a>
                <a href="#" className="header__dropdown-item">DevOps-инженер с нуля</a>
                <a href="#" className="header__dropdown-item">Go-разработчик</a>
                <a href="#" className="header__dropdown-item">Java-разработчик</a>
                <a href="#" className="header__dropdown-item">Python-разработчик</a>
                <a href="#" className="header__dropdown-item">Аналитик данных</a>
                <a href="#" className="header__dropdown-item">ИИ для разработчиков</a>
                <a href="#" className="header__dropdown-item">Фронтенд-разработчик</a>
              </div>
            </div>
            <div className="header__nav-item header__nav-item--desktop">
              <button className="header__nav-btn">
                О Хекслете
                <ChevronDown size={14} className="header__chevron" />
              </button>
              <div className="header__dropdown">
                <a href="#" className="header__dropdown-item">О нас</a>
                <a href="#" className="header__dropdown-item">Блог</a>
                <a href="#" className="header__dropdown-item">Отзывы студентов</a>
                <div className="header__dropdown-divider" />
                <a href="#" className="header__dropdown-item">Результаты (Исследование)</a>
                <a href="#" className="header__dropdown-item">Хекслет Карьера</a>
                <a href="#" className="header__dropdown-item">Поддержка (В ТГ)</a>
                <a href="#" className="header__dropdown-item">Реферальная программа</a>
                <a href="#" className="header__dropdown-item">🎁 Подарочные сертификаты</a>
                <a href="#" className="header__dropdown-item">Вакансии</a>
                <a href="#" className="header__dropdown-item">Компаниям</a>
                <a href="#" className="header__dropdown-item">Колледж</a>
                <a href="#" className="header__dropdown-item">Частная школа</a>
              </div>
            </div>

            <a href="#" className="header__nav-btn header__nav-btn--desktop">Подписка</a>
          </nav>
        </div>

        <div className="header__right">
          <a href="#" className="header__nav-btn header__nav-btn--desktop">Регистрация</a>
          <Link to="/login" className="header__nav-btn header__nav-btn--desktop">
          Вход
          </Link>
          <button
            onClick={onToggleDark}
            className="header__theme-btn header__theme-btn--desktop"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="header__burger"
            aria-label="Меню"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="header__mobile-menu">
          <a href="#" className="header__mobile-item header__mobile-item--arrow">
            О Хекслете <ChevronRight size={16} />
          </a>
          <a href="#" className="header__mobile-item">Подписка</a>
          <div className="header__mobile-divider" />
          <a href="#" className="header__mobile-item">Регистрация</a>
          <a href="#" className="header__mobile-item">Вход</a>
          <div className="header__mobile-divider" />
          <button
            onClick={onToggleDark}
            className="header__mobile-item header__mobile-item--theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
            Переключить тему
          </button>
        </div>
      )}
    </header>
  );
}




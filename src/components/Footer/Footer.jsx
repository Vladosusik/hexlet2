import { useState } from "react";
import { ChevronDown, Mail, Send, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const FOOTER_COLUMNS = [
  {
    title: "Хекслет",
    links: [
      "О нас",
      "Отзывы",
      "Справка",
      "Блог",
      "Вопросы и ответы",
      "Глоссарий",
      "Карта сайта",
    ],
  },
  {
    title: "Направления",
    links: [
      "Программирование",
      "ИИ",
      "Аналитика",
      "DevOps",
      "Тестирование",
      "Фронтенд",
      "Бэкенд",
    ],
  },
  {
    title: "Профессии",
    links: [
      "ИИ для разработчиков",
      "Python-разработчик",
      "Фронтенд-разработчик",
      "Java-разработчик",
      "Инженер по ручному тестированию",
      "DevOps-инженер с нуля",
      "PHP-разработчик",
      "Go-разработчик",
      "Аналитик данных",
      "AI-автоматизация",
      "Инженерия агентов",
    ],
  },
  {
    title: "Навыки",
    links: [
      "Spring Boot",
      "Docker",
      "Typescript",
      "Laravel",
      "Django",
      "React",
      "Веб-разработка на Express",
      "Postman",
      "REST API в Node.js",
    ],
  },
];

const COMPANIES = [
  {
    name: "ООО «Хекслет Рус»",
    details: [
      "108813, г. Москва, вн. тер. г. поселение Московский, г. Московский, ул. Солнечная, д. 3А, стр. 1, помещ. 205/3",
      "ОГРН 1217300010476",
      "ИНН 7325174845",
    ],
  },
  {
    name: "АНО ДПО «Учебный центр Хекслет»",
    details: [
      "119331, г. Москва, вн. тер. г. муниципальный округ Ломоносовский, пр-кт Вернадского, д. 29, помещение 4/2",
      "ОГРН 1247700742390",
      "ИНН 7736364948",
      "Лицензия на осуществление образовательной деятельности № Л035-01298-77/01989008 от 14.03.2025, выдана Департаментом образования и науки города Москвы, бессрочная",
    ],
  },
];

function Footer() {
  const [expandedCompany, setExpandedCompany] = useState(null);

  function toggleCompany(companyName) {
    setExpandedCompany((current) =>
      current === companyName ? null : companyName,
    );
  }

  return (
    <footer className="site-footer" id="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__columns">
          {FOOTER_COLUMNS.map((column) => (
            <nav
              className="site-footer__column"
              aria-label={column.title}
              key={column.title}
            >
              <h2 className="site-footer__heading">{column.title}</h2>
              <ul className="site-footer__link-list">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link to="/catalog">{link}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__contact site-footer__contact--social">
            <div
              className="site-footer__social-links"
              aria-label="Социальные сети"
            >
              <a href="" aria-label="Hexlet в Telegram">
                <Send size={16} />
              </a>
              <a
                href=""
                aria-label="Hexlet на YouTube"
              >
                <Youtube size={17} />
              </a>
              <a
                className="site-footer__vk"
                href=""
                aria-label="Hexlet во ВКонтакте"
              >
                VK
              </a>
            </div>

            <a
              className="site-footer__contact-link"
              href=""
            >
              <Mail size={13} />
              support@hexlet.io
            </a>

            <a
              className="site-footer__contact-link"
              href=""
            >
              t.me/hexlet_help_bot
            </a>

            <div className="site-footer__languages" aria-label="Язык">
              <a href="#ru" aria-current="page">RU</a>
              <a href="#en">EN</a>
              <a href="#kz">KZ</a>
            </div>
          </div>

          <div className="site-footer__contact site-footer__phones">
            <a className="site-footer__phone" href="tel:+78001002247">
              +7 800 100 22 47
            </a>
            <span>Бесплатно по РФ</span>

            <a className="site-footer__phone" href="tel:+74950852162">
              +7 495 085 21 62
            </a>
            <span>Бесплатно по Москве</span>
          </div>

          <nav
            className="site-footer__contact site-footer__legal-links"
            aria-label="Правовая информация"
          >
            <h2 className="site-footer__bottom-heading">
              Правовая информация
            </h2>
            <a href="#offer">Оферта</a>
            <a href="#license">Лицензия</a>
            <a href="#contacts">Контакты</a>
          </nav>

          <div
            className="site-footer__companies"
            aria-label="Сведения об организациях"
          >
            {COMPANIES.map((company) => {
              const isOpen = expandedCompany === company.name;
              const panelId = `company-details-${company.name
                .toLowerCase()
                .replace(/[^a-zа-я0-9]+/gi, "-")}`;

              return (
                <section className="site-footer__company" key={company.name}>
                  <button
                    className="site-footer__company-toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleCompany(company.name)}
                  >
                    <span>{company.name}</span>
                    <ChevronDown
                      className={
                        isOpen
                          ? "site-footer__chevron is-open"
                          : "site-footer__chevron"
                      }
                      size={16}
                    />
                  </button>

                  {isOpen && (
                    <div className="site-footer__company-details" id={panelId}>
                      {company.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
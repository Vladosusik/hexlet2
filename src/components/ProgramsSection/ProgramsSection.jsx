import { Calendar } from "lucide-react";
import professionImg from "/src/assets/sotrudnik1.png";
import skillsImg from "/src/assets/sotrudnik2.png";
import "./ProgramsSection.css"
const PROGRAM_GROUPS = [
  {
    title: "Профессии",
    description: "Если вы новичок и хотите получить новую профессию в IT-сфере",
    image: professionImg,
    imageAlt: "Надежда Каменская, выпускница курса Frontend-разработчик",
    caption: "Надежда Каменская, выпускница курса Frontend-разработчик",
    items: [
      {
        name: "LLM-разработчик",
        description: "Внедрение языковых моделей в продукты и рабочие процессы",
        duration: "4 месяца",
      },
      {
        name: "DevOps-инженер с нуля",
        description: "Инфраструктура, контейнеры, CI/CD и Kubernetes",
        duration: "14 месяцев",
      },
      {
        name: "Go-разработчик с нуля",
        description: "Серверная разработка, API, горутины и Gin",
        duration: "10 месяцев",
      },
    ],
    action: "Все профессии",
  },
  {
    title: "Навыки",
    description: "Если вы хотите повысить квалификацию или актуализировать знания",
    image: skillsImg,
    imageAlt: "Евгений Сендзюк, выпускник курсов Python и Frontend-разработчик",
    caption: "Евгений Сендзюк, выпускник курсов Python и Frontend-разработчик",
    items: [
      {
        name: "ИИ для разработчиков",
        description: "AI-агенты, GitHub и современные AI-workflow",
        duration: "1 месяц",
      },
      {
        name: "DevOps для разработчиков",
        description: "Деплой, GitHub Actions, Docker, Ansible, Terraform и IaC",
        duration: "3 месяца",
      },
      {
        name: "Алгоритмы и структуры данных",
        description: "Сортировки, графы, деревья, поиск и оценка сложности задач",
        duration: "1 месяц",
      },
    ],
    action: "Все навыки",
  },
];
function ProgramsSection() {
  return (
    <section className="programs" aria-labelledby="programs-title">
      <div className="programs__intro">
        <h2 id="programs-title">
          Школа программирования для любого уровня: от нуля до опытного практика
        </h2>
      </div>
      <div className="programs__groups">
        {PROGRAM_GROUPS.map((group) => (
          <article className="program-group" key={group.title}>
            <div className="program-group__portrait">
              <img src={group.image} alt={group.imageAlt} />
              <span>{group.caption}</span>
            </div>
            <div className="program-group__content">
              <div className="program-group__heading">
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <div className="program-list">
                {group.items.map((item) => (
                  <a href="#catalog" className="program-row" key={item.name}>
                    <strong>{item.name}</strong>
                    <span className="program-row__description">
                      {item.description}
                    </span>
                    <span className="program-row__duration">
                      <Calendar size={13} strokeWidth={1.8} />
                      {item.duration}
                    </span>
                  </a>
                ))}
              </div>
              <a className="program-group__action" href="#catalog">
                {group.action}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProgramsSection;
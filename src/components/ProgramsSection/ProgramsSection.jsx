import { Calendar } from "lucide-react";
import { getProgramPeople } from "../../api/teacherAPI";
import { Link } from "react-router-dom";
import "./ProgramsSection.css"
import { useState, useEffect } from "react";
const PROGRAM_GROUPS = [
  {
    title: "Профессии",
    description: "Если вы новичок и хотите получить новую профессию в IT-сфере",
    peopleGroupId: "professions",
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
        description: "Серверная разработка, API, горутины и Go",
        duration: "10 месяцев",
      },
    ],
    action: "Все профессии",
  },
  {
    title: "Навыки",
    description: "Если вы хотите повысить квалификацию или актуализировать знания",
    peopleGroupId: "skills",
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
  const [programPeople, setProgramPeople] = useState([]);
  const [loadingPeople, setLoadingPeople] = useState(true);
  const [peopleError, setPeopleError] = useState(false);

  useEffect(() => {
    let isActive = true;

    getProgramPeople()
      .then((people) => {
        if (isActive) {
          setProgramPeople(people);
          setPeopleError(false);
        }
      })
      .catch(() => {
        if (isActive) {
          setPeopleError(true);
        }
      })
      .finally(() => {
        if (isActive) {
          setLoadingPeople(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <section className="programs" aria-labelledby="programs-title">
      <div className="programs__intro">
        <h2 id="programs-title">Школа программирования для любого уровня: от нуля до опытного практика</h2>
      </div>

      <div className="programs__groups">
        {PROGRAM_GROUPS.map((group) => {
          const person = programPeople.find(
            (entry) => entry.groupId === group.peopleGroupId,
          );

          return (
            <article className="program-group" key={group.title}>
              <div
                className={`program-group__portrait ${
                  loadingPeople ? "program-group__portrait--loading" : ""
                }`}
                aria-busy={loadingPeople}
              >
                {person ? (
                  <>
                    <img src={person.image} alt={person.imageAlt} />
                    <span>{person.caption}</span>
                  </>
                ) : loadingPeople ? (
                  <div className="program-group__loading" role="status">
                    Загрузка профиля…
                  </div>
                ) : peopleError ? (
                  <div className="program-group__profile-error" role="alert">
                    Не удалось загрузить профиль
                  </div>
                ) : null}
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
                    <Link to="" className="program-row" key={item.name}>
                      <strong>{item.name}</strong>
                      <span className="program-row__description">{item.description}</span>
                      <span className="program-row__duration">
                        <Calendar size={13} strokeWidth={1.8} />
                        {item.duration}
                      </span>
                    </Link>
                  ))}
                </div>

                <Link className="program-group__action" to="">
                  {group.action}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default ProgramsSection;
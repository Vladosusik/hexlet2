import { Headphones, TrendingUp, Flame, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.jpg";
import "./HeroSection.css";

const HERO_CARDS = [
  {
    icon: Headphones,
    title: "Освоить профессию с нуля",
    to: "/catalog",
    variant: "default",
  },
  {
    icon: TrendingUp,
    title: "Освоить навык и повысить грейд",
    to: "/catalog",
    variant: "default",
  },
  {
    icon: Flame,
    title: "Начать бесплатно",
    to: "/catalog",
    variant: "primary",
  },
  {
    icon: Building2,
    title: "Обучение от компании",
    to: "/catalog",
    variant: "default",
  },
];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__text">
          <h1 className="hero__title">
            Онлайн-школа<br />
            программирования<br />
            Хекслет
          </h1>
          <p className="hero__subtitle">
            Помогли стать программистами{" "}
            <strong className="hero__highlight">4500+ выпускникам</strong>.
            Пройдите путь от новичка до первой работы с поддержкой практикующих разработчиков и стажировкой
          </p>
        </div>

        <div className="hero__cards">
          {HERO_CARDS.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>

        <div className="hero__photo-wrap">
          <img src={heroImg} alt="Студенты Хекслет" className="hero__photo-img" />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, to, variant }) {
  return (
    <Link to={to} className={`feature-card feature-card--${variant}`}>
      <span className="feature-card__icon">
        <Icon size={20} />
      </span>
      <span className="feature-card__title">{title} →</span>
    </Link>
  );
}

import { useState } from 'react';
import { Eye, EyeOff, Send } from 'lucide-react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState('');


  const validate = () => {
    const nextErrors = {};

    if (!email.trim()) {
      nextErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Проверьте формат email';
    }

    if (!password) {
      nextErrors.password = 'Введите пароль';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    setNotice('');

    if (validate()) {
      setNotice('Форма заполнена. Вход в аккаунт в этой демонстрации не выполняется.');
    }
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
    setErrors((current) => ({ ...current, email: undefined }));
    setNotice('');
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
    setErrors((current) => ({ ...current, password: undefined }));
    setNotice('');
  };

  return (
    <section className="login-panel" id="login" aria-labelledby="login-title">
      <h1 className="login-title" id="login-title">Вход</h1>

      <form noValidate onSubmit={submit}>
        <div className="login-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            data-testid="input-email"
            type="email"
            autoComplete="email"
            value={email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={errors.email ? 'invalid' : ''}
            onChange={updateEmail}
          />
          {errors.email && (
            <span className="field-error" id="email-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="login-field">
          <label htmlFor="password">Пароль</label>
          <div className="input-wrap">
            <input
              id="password"
              data-testid="input-password"
              className={`password-input${errors.password ? ' invalid' : ''}`}
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'password-error' : undefined}
              onChange={updatePassword}
            />
            <button
              className="visibility-toggle"
              type="button"
              aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((visible) => !visible)}
            >
              {showPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
            </button>
          </div>
          {errors.password && (
            <span className="field-error" id="password-error">
              {errors.password}
            </span>
          )}
        </div>

        <div className="forgot-row">
          <button
            className="text-link"
            type="button"
            onClick={() => explainUnavailable('Восстановление пароля')}
          >
            Забыли пароль?
          </button>
        </div>

        <button className="submit-button" type="submit">
          Войти
        </button>
      </form>

      {notice && <p className="form-notice" role="status">{notice}</p>}

      <div className="register-row" id="register">
        <span>Нет аккаунта?</span>
        <button
          className="text-link"
          type="button"
          onClick={() => explainUnavailable('Регистрация')}
        >
          Зарегистрироваться
        </button>
      </div>

      <div className="social-list" aria-label="Войти с помощью соцсети">
        <button
          className="social-button"
          type="button"
          onClick={() => explainUnavailable('Вход через VK ID')}
        >
          <span className="social-icon" aria-hidden="true">ᴠκ</span>
          Подключить VK ID
        </button>
        <button
          className="social-button"
          type="button"
          onClick={() => explainUnavailable('Вход через Yandex ID')}
        >
          <span className="social-icon" aria-hidden="true">Я</span>
          Подключить Yandex ID
        </button>
        <button
          className="social-button"
          type="button"
          onClick={() => explainUnavailable('Вход через Telegram')}
        >
          <span className="social-icon" aria-hidden="true"><Send /></span>
          Войти через Telegram
        </button>
      </div>
    </section>
  );
}
import { useState } from "react";
import PropTypes from "prop-types";
import { Description } from "./description.jsx";
import { Title } from "./title.jsx";
import { ValidationMessage } from "./validation-message.jsx";
import { PopUp } from "./pop-up.jsx";
import {
  isValidFullName,
  isValidEmail,
  isValidText,
  isValidForm,
} from "./modules/isValidField.js";
import classNames from "classnames";
import styles from "../styles/review-form.module.scss";

export const ReviewForm = ({ update }) => {
  const [fields, setFields] = useState({
    surname: "",
    name: "",
    email: "",
    text: "",
    rating: 5,
  });

  const [isValid, setIsValid] = useState({
    surname: false,
    name: false,
    email: false,
    text: false,
  });

  const [errors, setErrors] = useState({
    surname: null,
    name: null,
    email: null,
    text: null,
  });

  const [httpResponse, setHttpResponse] = useState({});

  const [isActivePopUp, setIsActivePopUp] = useState(false);

  const handleSurname = (event) => {
    const { value } = event.target;

    setFields({ ...fields, surname: value });

    if (!isValidFullName(value)) {
      setErrors({ ...errors, surname: "Некорректный формат фамилии" });
      setIsValid({ ...isValid, surname: false });
    } else {
      setErrors({ ...errors, surname: null });
      setIsValid({ ...isValid, surname: true });
    }
  };

  const handleName = (event) => {
    const { value } = event.target;

    setFields({ ...fields, name: value });

    if (!isValidFullName(value)) {
      setErrors({ ...errors, name: "Некорректный формат имени" });
      setIsValid({ ...isValid, name: false });
    } else {
      setErrors({ ...errors, name: null });
      setIsValid({ ...isValid, name: true });
    }
  };

  const handleEmail = (event) => {
    const { value } = event.target;

    setFields({ ...fields, email: value });

    if (!isValidEmail(value)) {
      setErrors({ ...errors, email: "Некорректный формат email" });
      setIsValid({ ...isValid, email: false });
    } else {
      setErrors({ ...errors, email: null });
      setIsValid({ ...isValid, email: true });
    }
  };

  const handleText = (event) => {
    const { value } = event.target;

    setFields({ ...fields, text: value });

    if (!isValidText(value)) {
      setErrors({ ...errors, text: "Отзыв не должен быть пустым" });
      setIsValid({ ...isValid, text: false });
    } else {
      setErrors({ ...errors, text: null });
      setIsValid({ ...isValid, text: true });
    }
  };

  const handleRating = (event) => {
    const { rating } = event.target.dataset;

    setFields({ ...fields, rating: parseInt(rating) });
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (isValidForm(isValid)) {
      fetch(`${process.env.NEXT_PUBLIC_URL}/reviews`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      })
        .then((response) => {
          if (response.ok) {
            update();
            setFields({
              surname: "",
              name: "",
              email: "",
              text: "",
              rating: 5,
            });
            setIsValid({
              surname: false,
              name: false,
              email: false,
              text: false,
            });
            setHttpResponse({ ok: true });
          } else {
            setHttpResponse({ unauthorized: true });
          }
        })
        .catch(() => {
          setHttpResponse({ serverUnavailable: true });
        })
        .finally(() => {
          setIsActivePopUp(true);
        });
    }
  };

  return (
    <>
      <PopUp isActive={isActivePopUp} setIsActive={setIsActivePopUp}>
        {httpResponse.ok && (
          <>
            <Title text="Спасибо за комментарий" />
            <Description text="Нам очень приятно, что Вы уделили время и уведомили нас о качестве оказания наших услуг" />
          </>
        )}
        {httpResponse.unauthorized && (
          <>
            <Title text="Мы не знаем, что Вы за клиент" />
            <Description text="Вы не можете оставлять отзывы, так как мы с Вами не сотрудничали. Возможно, мы Вас просто не узнали, так как email отличается от указанного Вами ранее в вашей заявке" />
          </>
        )}
        {httpResponse.serverUnavailable && (
          <>
            <Title text="Сервер временно недоступен" />
            <Description text="Подождите немного. Скоро мы всё исправим." />
          </>
        )}
      </PopUp>

      <form className={styles.reviewForm} onSubmit={submitForm}>
        <div className={styles.surname}>
          <input
            type="text"
            placeholder="Фамилия"
            onChange={handleSurname}
            value={fields.surname}
            maxLength={32}
          />
          <ValidationMessage message={errors.surname} />
        </div>
        <div className={styles.name}>
          <input
            type="text"
            placeholder="Имя"
            onChange={handleName}
            value={fields.name}
            maxLength={32}
          />
          <ValidationMessage message={errors.name} />
        </div>
        <div className={styles.email}>
          <input
            type="text"
            placeholder="Email"
            onChange={handleEmail}
            value={fields.email}
            maxLength={64}
          />
          <ValidationMessage message={errors.email} />
        </div>
        <div className={styles.text}>
          <textarea
            placeholder="Отзыв"
            onChange={handleText}
            value={fields.text}
            maxLength={1024}
          />
          <ValidationMessage message={errors.text} />
        </div>
        <div className={styles.rating}>
          <label>Как вы оцениваете нашу работу?</label>
          <ul className={styles.stars} onClick={handleRating}>
            {[1, 2, 3, 4, 5].map((star) => (
              <li
                key={star}
                className={classNames(
                  styles.star,
                  fields.rating === star ? styles.selected : ""
                )}
                data-rating={star}
              />
            ))}
          </ul>
        </div>
        <button className={styles.submit} type="submit">
          Отправить
        </button>
      </form>
    </>
  );
};

ReviewForm.propTypes = {
  update: PropTypes.func.isRequired,
};

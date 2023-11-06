import { useState, useContext, useEffect } from "react";
import { Title } from "../components/title.jsx";
import { PopUp } from "../components/pop-up.jsx";
import { ValidationMessage } from "../components/validation-message.jsx";
import InputMask from "react-input-mask";
import {
  isValidEmail,
  isValidForm,
  isValidFullName,
  isValidPhone,
} from "./modules/isValidField.js";
import { isEmptyObject } from "./modules/isEmptyObject.js";
import { RequestContext } from "./context/request.jsx";
import styles from "../styles/request-form.module.scss";

export const SendRequestForm = () => {
  const {
    choosedServices,
    choosedProject,
    setChoosedServices,
    setChoosedProject,
  } = useContext(RequestContext);

  const servicesId = [];

  useEffect(() => {
    choosedServices.map((choosedService) =>
      servicesId.push(parseInt(choosedService.id))
    );
  }, []);

  const [fields, setFields] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
    servicesId,
    projectId: choosedProject.id,
  });

  const [isValid, setIsValid] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const [errors, setErrors] = useState({
    phone: null,
    name: null,
    email: null,
  });

  const [httpResponse, setHttpResponse] = useState({});

  const [isActivePopUp, setIsActivePopUp] = useState(false);

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

  const handlePhone = (event) => {
    const { value } = event.target;

    setFields({ ...fields, phone: value });

    if (!isValidPhone(value)) {
      setErrors({ ...errors, phone: "Некорректный формат номера" });
      setIsValid({ ...isValid, phone: false });
    } else {
      setErrors({ ...errors, phone: null });
      setIsValid({ ...isValid, phone: true });
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

  const handleComment = (event) => {
    const { value } = event.target;

    setFields({ ...fields, comment: value });
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (isValidForm(isValid)) {
      fetch(`${process.env.NEXT_PUBLIC_URL}/requests`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      })
        .then(() => {
          setFields({ name: "", phone: "", email: "", comment: "" });
          setIsValid({ name: false, phone: false, email: false, comment: "" });
          setHttpResponse({ ok: true });
          setChoosedServices([]);
          setChoosedProject({});
        })
        .catch(() => {
          setHttpResponse({ serverUnavailable: true });
        })
        .then(() => {
          setIsActivePopUp(true);
        });
    }
  };
  return (
    <>
      <PopUp isActive={isActivePopUp} setIsActive={setIsActivePopUp}>
        {httpResponse.ok && (
          <>
            <Title text="Спасибо за оформленную заявку" />
            <p>Скоро Вам позвонит наш администратор</p>
          </>
        )}
        {httpResponse.serverUnavailable && (
          <>
            <Title text="Сервер временно недоступен" />
            <p>Подождите немного. Скоро мы всё исправим.</p>
          </>
        )}
      </PopUp>
      {!(isEmptyObject(choosedServices) && isEmptyObject(choosedProject)) && (
        <form className={styles.requestForm} onSubmit={submitForm}>
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
          <div className={styles.phone}>
            <InputMask
              type="text"
              placeholder="Телефон"
              mask="+375 (99) 999-99-99"
              onChange={handlePhone}
              value={fields.phone}
            />
            <ValidationMessage message={errors.phone} />
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
          <div className={styles.comment}>
            <textarea
              maxLength={1024}
              placeholder="Комментарий"
              onChange={handleComment}
              value={fields.comment}
            />
            <ValidationMessage message={errors.comment} />
          </div>
          <button className={styles.submit} type="submit">
            Отправить
          </button>
        </form>
      )}
    </>
  );
};

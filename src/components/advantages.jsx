import PropTypes from "prop-types";
import { Container } from "./container.jsx";
import { Title } from "./title.jsx";
import { Subtitle } from "./subtitle.jsx";
import styles from "../styles/advantages.module.scss";

export const Advantages = () => {
  const advantages = [
    {
      id: 1,
      name: "Цены",
      description:
        "Наша компания использует наиболее низкие цены в сравнении с конкурентами",
    },
    {
      id: 2,
      name: "Опыт",
      description:
        "Наши работники имеют высокий объём знаний, касающихся ландшафтного проектирования и всегда смогут Вам помочь",
    },
    {
      id: 3,
      name: "Качество",
      description:
        "Мы всегда всё делаем идеально. Если нашего клиента что-то не устраивает, мы обязательно прислушиваемся к его мнению и переделываем работу",
    },
    {
      id: 4,
      name: "Доступ",
      description:
        "Наша студия принимает заказы по всей территории Беларуси. Из любого города и села, как бы это не было для нас далеко",
    },
    {
      id: 5,
      name: "Услуги",
      description:
        "Делаем с вашим участком практически всё, что только можно. Смотрите наш перечень услуг",
    },
    {
      id: 6,
      name: "Галерея",
      description:
        "Множество фотографий работ доступно на нашем сайте. А также в наших соцсетях",
    },
  ];

  return (
    <div className={styles.advantagesBlock}>
      <Container>
        <div className={styles.body}>
          <Title text="Чем мы лучше наших конкурентов?" />
          <ul className={styles.advantages}>
            {advantages.map((advantage) => (
              <Advantage
                key={advantage.id}
                name={advantage.name}
                description={advantage.description}
              />
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

const Advantage = ({ name, description }) => (
  <li className={styles.advantage}>
    <Subtitle text={name} />
    <p className={styles.description}>{description}</p>
  </li>
);

Advantage.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

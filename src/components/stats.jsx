import PropTypes from "prop-types";
import { Container } from "./container.jsx";
import { Title } from "./title.jsx";
import styles from "../styles/stats.module.scss";

export const Stats = ({ stats }) => {
  const info = [
    {
      id: 1,
      count: stats.workYears,
      text: "лет наша студия занимается ландшафтным дизайном. За это время",
    },
    {
      id: 2,
      count: stats.services,
      text: "услуг было заказано нашими клиентами, а также",
    },
    {
      id: 3,
      count: stats.projects,
      text: "проектов выполнено. Для этого",
    },
    {
      id: 4,
      count: stats.graphicDesigners,
      text: "графических дизайнеров создаёт их модели в виде эскизов и визуализаций, чтобы ",
    },
    {
      id: 5,
      count: stats.workers,
      text: "сотрудников воплощали эти модели в жизнь, в результате чего",
    },
    {
      id: 6,
      count: stats.clients,
      text: "клиентов немного или существенно изменили свой участок к лучшему.",
    },
  ];

  return (
    <div className={styles.statsBlock}>
      <Container>
        <div className={styles.body}>
          <Title text="Информация в цифрах, просто и наглядно отражающая интересные факты и достижения студии «Апрель»" />
          <ul className={styles.stats}>
            {info.map((stat) => (
              <Stat key={stat.id} count={stat.count} text={stat.text} />
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.object.isRequired,
};

const Stat = ({ count, text }) => (
  <li className={styles.stat}>
    <span className={styles.number}>{count}</span>
    <span className={styles.separator}></span>
    <p className={styles.text}>{text}</p>
  </li>
);

Stat.propTypes = {
  count: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

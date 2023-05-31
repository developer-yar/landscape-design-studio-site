import { Container } from "./container.jsx";
import { Title } from "./title.jsx";
import styles from "../styles/couple-of-sentences.module.scss";

export const CoupleOfSentences = () => {
  return (
    <div className={styles.coupleOfSentences}>
      <Container>
        <div className={styles.body}>
          <Title text="Несколько предложений о нас и наших сотрудниках" />
          <blockquote className={styles.blockquote}>
            <p>
              Апрель - это команда. Это не работа одного дизайнера над проектом,
              а совместный мозговой штурм, на который собирается иногда человек
              пять. Это не работа одного озеленителя, который сажает деревья, а
              бригада, логистика и четкие согласованные действия. Это не просто
              косьба газона на уходе, а продуманный нами совместно комплекс
              работ по содержанию сада. Апрель - это люди, которые любят своё
              дело, знают его и постоянно идут вперёд. Каждый из 15 сотрудников
              создает то, что мы видим в итоге, тот сад, в который хочется
              вернуться и проводить в нем время
            </p>
          </blockquote>
          <figcaption className={styles.author}>
            — Сергей, директор студии Апрель
          </figcaption>
        </div>
      </Container>
    </div>
  );
};

import Head from "next/head";
import { Container } from "../components/container.jsx";
import { Description } from "../components/description.jsx";
import { Title } from "../components/title.jsx";
import styles from "../styles/404-500.module.scss";

export default function Page500() {
  return (
    <>
      <Head>
        <title>Что-то случилось...</title>
      </Head>
      <main className={styles.notFound}>
        <Container>
          <div className={styles.body}>
            <div className={styles.image} />
            <Title text="Что-то случилось..." />
            <Description text="Сейчас наш сервер недоступен, но мы оперативно работаем над возобновлением его работы" />
          </div>
        </Container>
      </main>
    </>
  );
}

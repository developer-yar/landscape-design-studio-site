import Head from "next/head";
import { Container } from "../components/container.jsx";
import { Description } from "../components/description.jsx";
import { Title } from "../components/title.jsx";
import styles from "../styles/404-500.module.scss";

export default function Page404() {
  return (
    <>
      <Head>
        <title>Cтраница не найдена</title>
      </Head>
      <main className={styles.notFound}>
        <Container>
          <div className={styles.body}>
            <div className={styles.image} />
            <Title text="Страница не найдена" />
            <Description text="Вы ошиблись при вводе URL-адреса или перешли по недействительной ссылке" />
          </div>
        </Container>
      </main>
    </>
  );
}

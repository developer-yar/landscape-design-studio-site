import PropTypes from "prop-types";
import Head from "next/head";
import { Advantages } from "../components/advantages.jsx";
import { Banners } from "../components/banners.jsx";
import { Stats } from "../components/stats.jsx";
import { Video } from "../components/video.jsx";
import { CoupleOfSentences } from "../components/couple-of-sentences.jsx";
import { toAPI } from "../components/modules/toAPI.js";
import styles from "../styles/main-page.module.scss";

export default function Index({ stats }) {
  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>
      <main className={styles.mainPage}>
        <Banners />
        <Stats stats={stats} />
        <Advantages />
        <Video />
        <CoupleOfSentences />
      </main>
    </>
  );
}

Index.propTypes = {
  stats: PropTypes.object.isRequired,
};

export async function getServerSideProps() {
  const stats = await toAPI("stats");

  if (stats)
    return {
      props: {
        stats,
      },
    };
  else
    return {
      notFound: true,
    };
}

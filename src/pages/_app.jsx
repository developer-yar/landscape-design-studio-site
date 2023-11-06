import { useState } from "react";
import { Router } from "next/router";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import TopBarProgress from "react-topbar-progress-indicator";
import { DataRequestContext } from "../components/context/request";
import { Header } from "../components/header.jsx";
import { Footer } from "../components/footer.jsx";
import { toAPI } from "../components/modules/toAPI";
import useSWR from "swr";
import "../styles/global/global.scss";

const myFont = localFont({
  src: "../../public/fonts/FuturaFuturisC.woff2",
});

export default function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(false);

  const { data } = useSWR(
    `api/work-types`,
    async () => await toAPI("work-types"),
    {
      fallbackData: [
        {
          id: 3,
          name: "3D-визуализация",
          link: "/works/3",
        },
        {
          id: 6,
          name: "Благоустройство территории",
          link: "/works/6",
        },
        {
          id: 11,
          name: "Другие виды работ",
          link: "/works/11",
        },
        {
          id: 4,
          name: "Подготовительные работы",
          link: "/works/4",
        },
        {
          id: 9,
          name: "Посадка растений",
          link: "/works/9",
        },
        {
          id: 1,
          name: "Предварительные работы",
          link: "/works/1",
        },
        {
          id: 2,
          name: "Проектирование",
          link: "/works/2",
        },
        {
          id: 12,
          name: "Профессиональный уход за садом",
          link: "/works/12",
        },
        {
          id: 8,
          name: "Работа с камнем",
          link: "/works/8",
        },
        {
          id: 7,
          name: "Создание газона",
          link: "/works/7",
        },
        {
          id: 5,
          name: "Сопровождение проекта",
          link: "/works/5",
        },
        {
          id: 10,
          name: "Фитодизайн помещений",
          link: "/works/10",
        },
      ],
    }
  );

  TopBarProgress.config({
    barColors: {
      0: "white",
      "1.0": "white",
    },
    shadowBlur: 0,
  });

  Router.events.on("routeChangeStart", () => {
    setProgress(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setProgress(false);
  });

  return (
    <>
      <ThemeProvider>
        <DataRequestContext>
          {progress && <TopBarProgress />}
          <section className={myFont.className}>
            <Header items={data} />
            <Component {...pageProps} />
            <Footer />
          </section>
        </DataRequestContext>
      </ThemeProvider>
    </>
  );
}

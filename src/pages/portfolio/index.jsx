import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout.jsx";
import { PortfolioPhotos } from "../../components/portfolio-photos.jsx";
import { Text } from "../../components/text.jsx";
import { toAPI } from "../../components/modules/toAPI.js";

export default function Portfolio({ photos }) {
  const breadcrumb = useRouter();

  const breadcrumbs = [
    {
      id: 1,
      name: "Портфолио",
      link: breadcrumb.asPath,
    },
  ];

  const text = [
    {
      id: 1,
      text: "Мы хотим, чтобы наши клиенты и простые посетители нашего сайта видели наш труд, восхищаясь всеми красотами ландшафтного дизайна. Для этого мы ведём на нашем сайте фотоблог, где показываем Вам наши самые удачные наработки.",
    },
    {
      id: 2,
      text: "Нам часто приходится проектировать. Рисовать вручную карандашом или моделировать за компьютером с использованием специальных программных средств. Выбор способа проектирования зависит от пожеланий нашего клиента. Примеры проектирования участков у нас имеются в разделе «Эскизы и визуализация» где Вы можете оценить креативность наших дизайнеров.",
    },
    {
      id: 3,
      text: "Каждый день наши сотрудники создают что-то новое, столь красивое и необычное. Сажают деревья. Ухаживают за растениями. Облагораживают земельный покров. Всё это можно найти в разделе «Реализованные проекты». Мы часто фотографируем участки заказчиков и создаём галереи, представляющие собой фотоотчёт по выполненной нами работе, что позволяет Вам визуально оценить качество наших услуг.",
    },
    {
      id: 4,
      text: "Мы фотографируем практически каждый участок, на котором работаем. Но иногда достаточно одной, двух или трёх фотографий. Этими фотографиями на этой странице мы также готовы с Вами поделиться. Здесь Вы увидите не только готовый участок, но и процесс его создания в результате нашей работы, ощутите этот столь сложный и трудоёмкий в исполнении процесс.",
    },
  ];

  return (
    <>
      <Layout breadcrumbs={breadcrumbs} title="Портфолио">
        <Text text={text} />
        <PortfolioPhotos photos={photos} />
      </Layout>
    </>
  );
}

Portfolio.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const photos = await toAPI("portfolio");

  if (photos)
    return {
      props: {
        photos,
      },
      revalidate: 86400,
    };
  else
    return {
      notFound: true,
    };
}

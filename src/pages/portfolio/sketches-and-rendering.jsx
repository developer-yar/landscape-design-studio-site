import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Description } from "../../components/description.jsx";
import { Layout } from "../../components/layout.jsx";
import { SketchesAndRenderingPhotos } from "../../components/photos.jsx";
import { toAPI } from "../../components/modules/toAPI.js";

export default function SketchesAndRendering({ photos }) {
  const breadcrumb = useRouter();

  const breadcrumbs = [
    {
      id: 1,
      name: "Портфолио",
      link: "/portfolio",
    },

    {
      id: 2,
      name: "Эскизы и визуализация",
      link: breadcrumb.asPath,
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs} title="Эскизы и визуализация">
      <Description text="Здесь мы показываем Вам проекты дизайна участков, которые затем воплощаются нами в жизнь после проведения проектных работ. Посмотрите, как стараются наши графические дизайнеры, моделируя будущий ландшафт." />
      <SketchesAndRenderingPhotos photos={photos} />
    </Layout>
  );
}

SketchesAndRendering.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const photos = await toAPI("sketches-and-rendering");

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

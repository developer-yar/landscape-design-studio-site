import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { CompletedProjectsAlbums } from "../../../components/photos.jsx";
import { Description } from "../../../components/description.jsx";
import { Layout } from "../../../components/layout.jsx";
import { toAPI } from "../../../components/modules/toAPI.js";

export default function CompletedProjects({ photos }) {
  const breadcrumb = useRouter();

  const breadcrumbs = [
    {
      id: 1,
      name: "Портфолио",
      link: "/portfolio",
    },

    {
      id: 2,
      name: "Реализованные проекты",
      link: breadcrumb.asPath,
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs} title="Реализованные проекты">
      <Description text="Эти фотоальбомы отображают примеры наших работ, показывая то, как мы улучшаем сады, парки, земли и другие ландшафтные объекты. Оцените то, как мы это умеем, как идеально у нас всё здесь получается." />
      <CompletedProjectsAlbums photos={photos} />
    </Layout>
  );
}

CompletedProjects.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const photos = await toAPI("completed-projects");

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

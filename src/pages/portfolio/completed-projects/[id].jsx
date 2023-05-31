import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Description } from "../../../components/description.jsx";
import { Layout } from "../../../components/layout.jsx";
import { Album } from "../../../components/album.jsx";
import { toAPI } from "../../../components/modules/toAPI.js";

export default function Gallery({ photos }) {
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
      link: "/portfolio/completed-projects",
    },

    {
      id: 3,
      name: "Галерея",
      link: breadcrumb.asPath,
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs} title="Галерея">
      <Description text="Полистайте и посмотрите, как мы можем улучшить Ваш сад. И это только лишь один из многих наших проектов." />
      <Album photos={photos} />
    </Layout>
  );
}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticPaths() {
  const galleries = await toAPI("completed-projects");

  const paths = galleries.map((gallery) => ({
    params: {
      id: gallery.id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const photos = await toAPI(`gallery/${params.id}`);

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

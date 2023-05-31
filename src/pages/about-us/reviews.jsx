import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { Description } from "../../components/description.jsx";
import { Layout } from "../../components/layout.jsx";
import { ReviewsWrapper } from "../../components/reviews-wrapper.jsx";
import { toAPI } from "../../components/modules/toAPI.js";

export default function Reviews({ fallback }) {
  const breadcrumb = useRouter();

  const breadcrumbs = [
    {
      id: 1,
      name: "О нас",
      link: "/about-us",
    },
    {
      id: 2,
      name: "Отзывы",
      link: breadcrumb.asPath,
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs} title="Отзывы">
      <Description text="Что вы думаете о наших проектах и садах? Напишите нам несколько слов, о том, что вам понравилось, а что хотелось бы изменить." />
      <SWRConfig value={{ fallback }}>
        <ReviewsWrapper />
      </SWRConfig>
    </Layout>
  );
}

Reviews.propTypes = {
  fallback: PropTypes.object.isRequired,
};

export async function getStaticProps() {
  const reviews = await toAPI("reviews");

  if (reviews)
    return {
      props: {
        fallback: {
          "api/reviews": reviews,
        },
      },
    };
  else
    return {
      notFound: true,
    };
}

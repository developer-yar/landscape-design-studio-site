import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout.jsx";
import { ServicesList } from "../../components/services-list.jsx";
import { toAPI } from "../../components/modules/toAPI.js";

export default function Services({ services }) {
  const breadcrumb = useRouter();

  const breadcrumbs = [
    {
      id: 1,
      name: "Услуги",
      link: "/works",
    },
    {
      id: 2,
      name: services.workTitle,
      link: breadcrumb.asPath,
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs} title={services.workTitle}>
      <ServicesList services={services} />
    </Layout>
  );
}

Services.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticPaths() {
  const works = await toAPI("works");

  const paths = works.map((work) => ({
    params: {
      id: work.id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const services = await toAPI(`services/${params.id}`);

  if (services)
    return {
      props: {
        services,
      },
      revalidate: 86400,
    };
  else
    return {
      notFound: true,
    };
}

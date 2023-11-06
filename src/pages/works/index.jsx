import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Description } from "../../components/description.jsx";
import { Layout } from "../../components/layout.jsx";
import { NotesList } from "../../components/notes-list.jsx";
import { WorksList } from "../../components/works-list.jsx";
import { toAPI } from "../../components/modules/toAPI.js";

export default function Works({ works, notes }) {
  const breadcrumb = useRouter();

  const breadcrumbs = [
    {
      id: 1,
      name: "Услуги",
      link: breadcrumb.asPath,
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs} title="Услуги">
      <Description text="Все предлагаемые нами услуги сгруппированы по характеру выполняемых работ, чтобы Вам было проще ориентироваться в их многообразии." />
      <WorksList works={works} />
      <NotesList notes={notes} />
    </Layout>
  );
}

Works.propTypes = {
  works: PropTypes.arrayOf(PropTypes.object).isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const works = await toAPI("works");
  const notes = await toAPI("notes");

  if (works || notes)
    return {
      props: {
        works,
        notes,
      },
      revalidate: 86400,
    };
  else
    return {
      notFound: true,
    };
}

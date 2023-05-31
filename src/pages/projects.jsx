import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Layout } from "../components/layout.jsx";
import { Description } from "../components/description.jsx";
import { ProjectsList } from "../components/projects-list.jsx";
import { toAPI } from "../components/modules/toAPI.js";

export default function Projects({ projects }) {
  const breadcrumb = useRouter();

  const breadcrumbs = [
    {
      id: 1,
      name: "Проекты",
      link: breadcrumb.asPath,
    },
  ];

  return (
    <>
      <Layout breadcrumbs={breadcrumbs} title="Проекты">
        <Description text="Представленные на этой странице проекты представляют собой комплекс услуг, предназначенных для полного преображения вашего сада. Это не просто какая-то небольшая работа на участке, а крупный план по его кардинальному изменению, в который будет вложено довольно много физических, материальных и временных ресурсов. Каждый следующий в порядке возрастания стоимости проект улучшает характеристики предыдущего, привнося дополнительные услуги или дополняя уже имеющиеся. Стоимость всех проектов указана за 100 квадратных метров. Выбирайте именно тот, который наиболее соответствует Вашему материальному положению. Мы убеждены в том, что какой бы проект из представленных нами Вы не выбрали, Вы всегда останетесь довольны качеством нашей работы." />
        <ProjectsList projects={projects} />
      </Layout>
    </>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  const projects = await toAPI("projects");

  if (projects)
    return {
      props: {
        projects,
      },
      revalidate: 86400,
    };
  else
    return {
      notFound: true,
    };
}

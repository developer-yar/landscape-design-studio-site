import PropTypes from "prop-types";
import { useContext } from "react";
import { RequestContext } from "./context/request.jsx";
import { isEmptyObject } from "./modules/isEmptyObject.js";
import { Subtitle } from "./subtitle.jsx";
import styles from "../styles/projects.module.scss";
import classNames from "classnames";

export const ProjectsList = ({ projects }) => {
  const { choosedProject, setChoosedProject } = useContext(RequestContext);

  const chooseProject = (event) => {
    const { id, title } = event.target.dataset;
    setChoosedProject({
      id: parseInt(id),
      title,
    });
  };

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          isChoosed={choosedProject.id === project.id}
          chooseProject={chooseProject}
        />
      ))}
      {!isEmptyObject(choosedProject) && (
        <button
          className={styles.clearButton}
          onClick={() => setChoosedProject({})}
        >
          Отменить заказ проекта
        </button>
      )}
    </div>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Project = ({ project, isChoosed, chooseProject }) => (
  <div className={classNames(styles.project, "card")} data-id={project.id}>
    <Subtitle text={project.title} />
    <ul className={styles.services}>
      {project.services.map((service) => (
        <li key={service.id} className={styles.service}>
          {service.title}
        </li>
      ))}
    </ul>
    <p className={styles.cost}>Стоимость {project.cost} рублей</p>
    <button
      className={isChoosed ? styles.choosedButton : styles.button}
      data-id={project.id}
      data-title={project.title}
      onClick={isChoosed ? () => {} : chooseProject}
    >
      {isChoosed ? "Проект добавлен к заказу" : "Заказать данный проект"}
    </button>
  </div>
);

Project.propTypes = {
  project: PropTypes.object.isRequired,
  isChoosed: PropTypes.bool.isRequired,
  chooseProject: PropTypes.func.isRequired,
};

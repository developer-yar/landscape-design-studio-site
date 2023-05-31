import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";
import styles from "../styles/works.module.scss";

export const WorksList = ({ works }) => (
  <ul className={styles.works}>
    {works.map((work) => (
      <li key={work.id} className={classNames(styles.work, "card")}>
        <Link className={styles.link} href={`/works/${work.id}`}>
          {work.title}
        </Link>
      </li>
    ))}
  </ul>
);

WorksList.propTypes = {
  works: PropTypes.arrayOf(PropTypes.object).isRequired,
};

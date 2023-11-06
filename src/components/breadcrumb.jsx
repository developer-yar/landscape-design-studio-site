import PropTypes from "prop-types";
import Link from "next/link";
import styles from "../styles/breadcrumb.module.scss";

export const Breadcrumb = ({ name, link }) => (
  <li className={styles.breadcrumb}>
    <Link className={styles.link} href={link}>
      {name}
    </Link>
  </li>
);

Breadcrumb.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

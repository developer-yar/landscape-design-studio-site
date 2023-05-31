import PropTypes from "prop-types";
import { Breadcrumb } from "./breadcrumb.jsx";
import styles from "../styles/breadcrumbs.module.scss";

export const Breadcrumbs = ({ breadcrumbs }) => (
  <>
    <ul className={styles.breadcrumbs}>
      <Breadcrumb name="Главная" link="/" />
      {breadcrumbs.map((breadcrumb) => (
        <Breadcrumb
          key={breadcrumb.id}
          name={breadcrumb.name}
          link={breadcrumb.link}
        />
      ))}
    </ul>
  </>
);

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

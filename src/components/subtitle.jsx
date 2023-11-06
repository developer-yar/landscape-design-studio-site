import PropTypes from "prop-types";
import styles from "../styles/subtitle.module.scss";

export const Subtitle = ({ text }) => (
  <h2 className={styles.subtitle}>{text}</h2>
);

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

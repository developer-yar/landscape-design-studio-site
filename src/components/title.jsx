import PropTypes from "prop-types";
import styles from "../styles/title.module.scss";

export const Title = ({ text }) => <h1 className={styles.title}>{text}</h1>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";
import styles from "../styles/text.module.scss";

export const Text = ({ text }) => (
  <div className={styles.text}>
    {text.map((paragraph) => (
      <p key={paragraph.id}>{paragraph.text}</p>
    ))}
  </div>
);

Text.propTypes = {
  text: PropTypes.arrayOf(PropTypes.object).isRequired,
};

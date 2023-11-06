import PropTypes from "prop-types";
import styles from "../styles/validation-message.module.scss";

export const ValidationMessage = ({ message }) =>
  message && <label className={styles.validationMessage}>{message}</label>;

ValidationMessage.propTypes = {
  message: PropTypes.string,
};

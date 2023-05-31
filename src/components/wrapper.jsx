import PropTypes from "prop-types";
import styles from "../styles/wrapper.module.scss";

export const Wrapper = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

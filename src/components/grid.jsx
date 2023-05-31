import PropTypes from "prop-types";
import styles from "../styles/grid.module.scss";

export const Grid = ({ children }) => (
  <div className={styles.grid}>{children}</div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

import PropTypes from "prop-types";
import container from "../styles/container.module.scss";

export const Container = ({ children }) => (
  <div className={container.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

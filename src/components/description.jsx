import PropTypes from "prop-types";
export const Description = ({ text }) => <p>{text}</p>;

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

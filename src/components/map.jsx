import PropTypes from "prop-types";
import styles from "../styles/map.module.scss";

export const Map = ({ path }) => (
  <iframe
    className={styles.map}
    src={path}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Офис организации на карте"
  ></iframe>
);

Map.propTypes = {
  path: PropTypes.string.isRequired,
};

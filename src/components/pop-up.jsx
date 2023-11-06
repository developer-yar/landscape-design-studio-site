import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "../styles/pop-up.module.scss";

export const PopUp = ({ isActive, setIsActive, children }) => (
  <section className={classNames(styles.popUp, isActive ? styles.active : "")}>
    <div className={classNames(styles.content, isActive ? styles.active : "")}>
      <div
        className={styles.closePopUp}
        onClick={() => {
          setIsActive(false);
        }}
      />
      {children}
    </div>
  </section>
);

PopUp.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

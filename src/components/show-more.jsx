import PropTypes from "prop-types";
import styles from "../styles/show-more.module.scss";

export const ShowMore = ({
  items,
  visibleItems,
  setVisibleItems,
  increaser = 6,
}) => {
  return (
    items.length - visibleItems > 0 && (
      <button
        className={styles.showMore}
        onClick={() => {
          setVisibleItems(visibleItems + increaser);
        }}
      >
        Показать ещё
      </button>
    )
  );
};

ShowMore.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  visibleItems: PropTypes.number.isRequired,
  setVisibleItems: PropTypes.func.isRequired,
  increaser: PropTypes.number,
};

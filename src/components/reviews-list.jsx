import { useState } from "react";
import PropTypes from "prop-types";
import { Description } from "../components/description.jsx";
import { ShowMore } from "../components/show-more.jsx";
import classNames from "classnames";
import styles from "../styles/view-reviews.module.scss";

export const ReviewsList = ({ reviews, count = 6 }) => {
  const [visibleReviews, setVisibleReviews] = useState(count);

  return (
    <>
      <Description text="Все представленные на этой странице отзывы являются независимым мнением от каждого клиента. Мы не занимаемся накруткой отзывов и публикуем все отзывы наших клиентов, включая те, что нам не нравятся. Анализируя Ваше мнение, мы стремимся улучшать качество нашей работы, исправляя все недостатки, замеченные Вами. Делаем всё, чтобы стать ещё лучше." />
      <div className={styles.viewReviews}>
        {reviews.slice(0, visibleReviews).map((review) => (
          <Review key={review.id} review={review} />
        ))}
        <ShowMore
          items={reviews}
          visibleItems={visibleReviews}
          setVisibleItems={setVisibleReviews}
        />
      </div>
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  count: PropTypes.number,
};

const Review = ({ review }) => {
  const { surname, name, text, rating, date } = review;

  let stars = [];
  for (let i = 0; i < rating; ++i)
    stars.push(<li key={i} className={styles.star} />);

  return (
    <article className={classNames(styles.review, "card")}>
      <p className={styles.reviewer}>
        {surname} {name}
      </p>
      <p className={styles.text}>{text} </p>
      <div className={styles.wrapper}>
        <ul className={styles.stars}>{stars}</ul>
        <time className={styles.date} dateTime={date}>
          {date}
        </time>
      </div>
    </article>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired,
};

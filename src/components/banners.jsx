import PropTypes from "prop-types";
import Image from "next/image";
import { Container } from "./container.jsx";
import styles from "../styles/banner.module.scss";

import image_1 from "../../public/images/1.jpg";
import image_2 from "../../public/images/2.jpg";
import image_3 from "../../public/images/3.jpg";
import image_4 from "../../public/images/4.jpg";

export const Banners = () => {
  const banners = [
    {
      id: 1,
      text: "Ландшафтный дизайн",
      image: image_1,
    },
    {
      id: 2,
      text: "От А до Я",
      image: image_2,
    },
    {
      id: 3,
      text: "Мы работаем в соответствии со стандартами",
      image: image_3,
    },
    {
      id: 4,
      text: "А главное с душой и на совесть",
      image: image_4,
    },
  ];

  return (
    <ul>
      {banners.map((banner) => (
        <Banner key={banner.id} text={banner.text} image={banner.image} />
      ))}
    </ul>
  );
};

const Banner = ({ text, image }) => (
  <li className={styles.banner}>
    <Container>
      <div className={styles.body}>
        <p className={styles.text}>{text}</p>
        <Image
          className={styles.image}
          src={image}
          alt="Фото из наших работ"
          width={320}
          height={320}
          quality={70}
          priority
        />
      </div>
    </Container>
  </li>
);

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import dynamic from "next/dynamic";
import Masonry from "react-masonry-css";
import styles from "../styles/masonry.module.scss";

const FsLightbox = dynamic(
  async () => (await import("fslightbox-react")).default
);

export const MasonryLayout = ({ photos }) => {
  const [images, setImages] = useState([]);
  const [toggler, setToggler] = useState(false);
  const [photoIndex, setPhotoIndex] = useState("");

  useEffect(() => {
    photos?.map((photo) => {
      images.push(photo.path);
    });
  }, []);

  const openFullScreenPhoto = (event) => {
    const path = event.target.dataset.src;
    setPhotoIndex(path);
    setToggler(!toggler);
  };

  return (
    <Masonry
      breakpointCols={{
        default: 4,
        991: 3,
        767: 2,
      }}
      className={styles.masonry}
      columnClassName={styles.column}
    >
      {photos.map((photo) => (
        <div
          className={styles.wrapper}
          key={photo.id}
          onClick={openFullScreenPhoto}
        >
          <Image
            className={styles.item}
            data-src={photo.path}
            src={photo.path}
            alt="Фото из портфолио"
            width={280}
            height={280}
            quality={30}
          />
        </div>
      ))}
      <FsLightbox
        toggler={toggler}
        sources={images}
        type="image"
        source={photoIndex}
      />
    </Masonry>
  );
};

MasonryLayout.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

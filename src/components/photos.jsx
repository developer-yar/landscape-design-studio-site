import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import Image from "next/image.js";
import Link from "next/link";
import { MasonryLayout } from "../components/masonry.jsx";
import styles from "../styles/photos.module.scss";

// const MasonryLayout = dynamic(
//   async () => (await import("../components/masonry.jsx")).MasonryLayout
// );

export const SketchesAndRenderingPhotos = ({ photos }) => (
  <MasonryLayout photos={photos} />
);

export const CompletedProjectsAlbums = ({ photos }) => (
  <div className={styles.photos}>
    {photos.map((photo, index) => (
      <Link
        key={photo.id}
        className={styles.link}
        href={`/portfolio/completed-projects/${photo.id}`}
      >
        <div className={styles.linkPhoto}>
          <Photo path={photo.path} index={index} />
        </div>
        <Caption
          address={photo.address}
          description={photo.description}
          date={photo.date}
        />
      </Link>
    ))}
  </div>
);

[SketchesAndRenderingPhotos, CompletedProjectsAlbums].map(
  (photos) =>
    (photos.propTypes = {
      photos: PropTypes.arrayOf(PropTypes.object).isRequired,
    })
);

const Photo = ({ path, index }) => (
  <Image
    className={styles.photo}
    src={path}
    alt="Фото из портфолио"
    width={1280}
    height={1280}
    quality={30}
    priority={index == 0 ? true : false}
  />
);

Photo.propTypes = {
  path: PropTypes.string.isRequired,
};

const Caption = ({ address, description, date }) => (
  <figcaption className={styles.data}>
    <p className={styles.address}>{address}</p>
    <p className={styles.works}>{description}</p>
    <time className={styles.date} dateTime={date}>
      {date}
    </time>
  </figcaption>
);

Caption.propTypes = {
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

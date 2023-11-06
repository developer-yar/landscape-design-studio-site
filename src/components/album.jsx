import PropTypes from "prop-types";
import { SwiperSlider } from "../components/swiper-slider.jsx";
import dynamic from "next/dynamic";

const MasonryLayout = dynamic(
  async () => (await import("../components/masonry.jsx")).MasonryLayout
);

export const Album = ({ photos }) => (
  <>
    <SwiperSlider photos={photos} />
    <MasonryLayout photos={photos} />
  </>
);

Album.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

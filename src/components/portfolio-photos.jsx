import PropTypes from "prop-types";
import dynamic from "next/dynamic";

const MasonryLayout = dynamic(
  async () => (await import("../components/masonry.jsx")).MasonryLayout
);

export const PortfolioPhotos = ({ photos }) => (
  <MasonryLayout photos={photos} />
);

PortfolioPhotos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

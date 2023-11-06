import dynamic from "next/dynamic";
import useSWR from "swr";
import { ReviewForm } from "./review-form.jsx";
import { toAPI } from "./modules/toAPI.js";

const ReviewsList = dynamic(
  async () => (await import("../components/reviews-list.jsx")).ReviewsList
);

export const ReviewsWrapper = () => {
  const { data, mutate } = useSWR(`api/reviews`, () => toAPI("reviews"));

  return (
    <>
      <ReviewForm update={mutate} />
      <ReviewsList reviews={data} />
    </>
  );
};

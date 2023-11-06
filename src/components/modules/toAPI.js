import { isEmptyObject } from "./isEmptyObject.js";

export const toAPI = (apiMethod) =>
  fetch(`${process.env.NEXT_PUBLIC_URL}/${apiMethod}`)
    .then((data) => data.json())
    .then((data) => (isEmptyObject(data) ? null : data));

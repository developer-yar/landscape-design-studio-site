export const isValidFullName = (value) => {
  const cyrillicRegExp = new RegExp(
    "^[А-ЯЎЁЇІЄҐ']{1}[а-яўёїієґ']+([-`][а-яўёїієґ']+)*$"
  );
  const latinRegExp = new RegExp("^[A-Z']{1}[a-z']+([-`][a-z']+)*$");
  return cyrillicRegExp.test(value) || latinRegExp.test(value);
};

export const isValidPhone = (value) => {
  const phoneRegExp = new RegExp(
    "^([+]375 [(](25|29|33|44)[)] ([0-9]{3}(-[0-9]{2}){2}))$"
  );
  return phoneRegExp.test(value);
};

export const isValidEmail = (value) => {
  const emailRegExp = new RegExp(
    "^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$"
  );
  return emailRegExp.test(value);
};

export const isValidText = (value) => {
  return value.trim("") !== "";
};

export const isValidForm = (fields) => {
  return !Object.values(fields).includes(false);
};

export const RequiredValidation = (value) => {
  if (!StringLengthValidation(value)) {
    return "This field is required.";
  }
  return "";
};

export const StringLengthValidation = (value) => {
  if (value.trim().length === 0) return false;
  return true;
};

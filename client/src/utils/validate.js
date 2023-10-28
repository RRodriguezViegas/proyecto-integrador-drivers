const validate = driverData => {
  let errors = {};

  if (!driverData.name) {
    errors.name = 'Name is required';
  }
  if (!driverData.surname) {
    errors.surname = 'Surname is required';
  }

  return errors;
};

export default validate;

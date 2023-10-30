const regexNameAndSurname = /^[a-zA-Z,'.\-\s]*$/i;

const validate = driverData => {
  let errors = {};

  if (!driverData.name || !regexNameAndSurname.test(driverData.name)) {
    errors.name = 'Error on name';
  }
  if (!driverData.surname || !regexNameAndSurname.test(driverData.surname)) {
    errors.surname = 'Error on surname';
  }

  return errors;
};

export default validate;

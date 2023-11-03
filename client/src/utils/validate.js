const regexNotSpecialNorNumber = /^[a-zA-Z,'.\-\s]*$/i;

const validate = driverData => {
  let errors = {};

  if (
    driverData.name.length < 3 ||
    driverData.name.length > 25 ||
    !regexNotSpecialNorNumber.test(driverData.name)
  ) {
    errors.name = 'Error on name';
  }
  if (
    driverData.surname.length < 3 ||
    driverData.surname.length > 25 ||
    !regexNotSpecialNorNumber.test(driverData.surname)
  ) {
    errors.surname = 'Error on surname';
  }

  if (
    driverData.nationality.length < 3 ||
    driverData.nationality.length > 25 ||
    !regexNotSpecialNorNumber.test(driverData.nationality)
  ) {
    errors.nationality = 'Error on nationality';
  }

  if (!driverData.dob) {
    errors.dob = 'Error on date of birth';
  }

  return errors;
};

export default validate;

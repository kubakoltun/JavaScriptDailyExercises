function zipvalidate(postcode) {
  const postalCodePattern = /^[12346]\d{5}$/;

  return postalCodePattern.test(postcode);
}

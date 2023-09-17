function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const currentDateObj = new Date(currentDate);
  const expirationDateObj = new Date(expirationDate);

  return (
    enteredCode === correctCode &&
    currentDateObj <= expirationDateObj
  );
}

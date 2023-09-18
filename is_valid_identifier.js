function is_valid_identifier(idn) {
  if (!idn) {
    return false;
  }

  if (!/^[a-zA-Z_$]/.test(idn[0])) {
    return false;
  }

  for (let i = 1; i < idn.length; i++) {
    if (!/^[a-zA-Z0-9_$]/.test(idn[i])) {
      return false;
    }
  }

  return true;
}

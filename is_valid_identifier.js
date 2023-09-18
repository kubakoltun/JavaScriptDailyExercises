function is_valid_identifier(idn) {
  return (/^[a-zA-Z_$][\w$]*$/).test(idn)
}

function combine_objects(...objects) {
  const result = {};

  for (const obj of objects) {
    for (const [key, value] of Object.entries(obj)) {
      result[key] = (result[key] || 0) + value;
    }
  }

  return result;
}

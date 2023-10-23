function objectify_url_string(queryString) {
  if (!queryString) {
    return {};
  }
  
  const params = queryString.split('&');
  const result = {};

  for (const param of params) {
    const [paramKey, paramValue] = param.split('=');
    const keys = paramKey.split('.');
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      if (i === keys.length - 1) {
        current[key] = decodeURIComponent(paramValue);
      } else {
        current[key] = current[key] || {};
        current = current[key];
      }
    }
  }

  return result;
}

export const get = item =>
  new Promise((resolve, reject) => {
    fetch(item.url, item.options)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
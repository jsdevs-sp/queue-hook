export const get = url =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
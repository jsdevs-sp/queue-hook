export const get = url =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onabort = reject;
    image.oncancel = reject;

    image.src = url;
  });
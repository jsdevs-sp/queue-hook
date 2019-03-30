const queues = {};

export function useQueue(key, queue) {
  const keys = Object.keys(queue);
  queues[key] = { promises: [] };

  const total = keys.length;
  let position = 0;

  return {
    loadQueue,
    loadQueueByItem
  }

  function createPromise(options) {
    if (/\.json/.test(options.url)) {
      return new Promise((resolve, reject) => {
        fetch(options.url)
          .then(response => response.json())
          .then(resolve)
          .catch(reject);
      });
    }

    if (/\.jpg|jpeg|png|gif|svg/.test(options.url)) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onabort = reject;
        image.oncancel = reject;

        image.src = options.url;
      });
    }
  }

  function loadQueue(onComplete) {
    queues[key].promises = keys.map(k => createPromise(queue[k]));

    Promise.all(queues[key].promises)
      .then((results) => {
        queues[key].data = {};
        results.forEach((result, i) => {
          queues[key].data[keys[i]] = result;
        });
        onComplete(queues[key]);
      })
      .catch(error => console.error(`Error: ${error.message}`));
  }

  function loadQueueByItem(onItemComplete) {
    keys.forEach((k, i) => {
      queues[key].promises[i] = createPromise(queue[k])
        .then((result) => {
          if (!queues[key].data) queues[key].data = {};
          queues[key].data[keys[i]] = result;
          position++;

          onItemComplete({
            item: result,
            key: keys[i],
            progress: position / total,
            position,
          });
        })
        .catch(error => console.error(error));
    });
  }
}

export const getQueues = () => queues;
export const getQueuesByKey = key => queues[key];
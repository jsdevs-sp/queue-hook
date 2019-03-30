const queues = {};

export function useQueue(key, queue) {
  console.log('__QueueHook__');
  const keys = Object.keys(queue);
  queues[key] = { promises: [] };

  return {
    loadQueue,
    loadQueueByItem
  }

  function loadQueue(onComplete) {
    queues[key].promises = keys.map(k => new Promise(queue[k]));

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
    let position = 0;
    keys.forEach((k, i) => {
      queues[key].promises[i] = new Promise(queue[k])
        .then((result) => {
          if (!queues[key].data) queues[key].data = {};
          queues[key].data[keys[i]] = result;
          position++;

          onItemComplete({
            item: result,
            key: keys[i],
            progress: position / keys.length,
            position,
          });
        })
        .catch(error => console.error(error));
    });
  }
}

export const getQueues = () => queues;
export const getQueuesByKey = key => queues[key];
const queues = {};

export const getQueues = () => queues;

export const getQueuesByKey = key => queues[key];

export function useQueue(key, queue) {
  queues[key] = queue;

  return {
    loadQueue,
    loadQueueByItem
  }

  async function loadQueue(callback) {
    const create = await import('./create');
    queue.forEach(async item => item.data = await create.promise(item));
    callback(queue);
  }

  async function loadQueueByItem(callback) {
    const create = await import('./create');
    let position = 0;

    queue.forEach(async item => {
      item.data = await create.promise(item);

      position++;

      callback({
        item,
        progress: position / queue.length,
        position,
        total: queue.length
      });
    });
  }
}
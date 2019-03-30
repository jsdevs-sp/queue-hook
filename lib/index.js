const queues = {};

export const getQueues = () => queues;

export const getQueuesByKey = key => queues[key];

export function useQueue(key, queue) {
  queues[key] = queue;

  return {
    loadQueue,
    loadQueueByItem
  }

  async function loadQueue(onComplete) {
    const create = await import('./create');
    queue.forEach(async item => item.data = await create.promise(item));
    onComplete(queue);
  }

  async function loadQueueByItem(onItemComplete) {
    const create = await import('./create');
    let position = 0;

    queue.forEach(async item => {
      item.data = await create.promise(item);

      position++;

      onItemComplete({
        item,
        progress: position / queue.length,
        position,
        total: queue.length
      });
    });
  }
}
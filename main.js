import { useQueue, getQueues, getQueuesByKey } from "./queue-hook.js";

const image = path => new Promise((resolve, reject) => {
  const url = new URL(path, import.meta.url);
  const image = new Image();
  image.onload = () => resolve(image);
  image.onabort = reject;
  image.oncancel = reject;

  image.src = url;
});

async function main() {
  const outputEl = document.querySelector('.output');
  const progressEl = document.querySelector('.progress');

  const manifest = await import('./preload-manifest.js');
  const imageEl = await image('./image.jpg');

  const { loadQueue, loadQueueByItem } = useQueue('preload', manifest.default);

  loadQueue((queue) => {
    console.log('onComplete:', queue);
    console.log('Main::getQueues', getQueues());
    console.log('Main::getQueuesByKey', getQueuesByKey('preload'));
  });

  loadQueueByItem(({ item, key, progress, position }) => {
    console.log('onItemComplete', key, item, progress);
    outputEl.innerHTML = `
      ${outputEl.innerHTML}
      <p>${position}/${Object.keys(manifest).length} - ${key}: ${item.message}</p>
    `;
    progressEl.textContent = `${progress * 100}%`;
  });
}

document.addEventListener('DOMContentLoaded', main);
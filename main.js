// import { useQueue, getQueues, getQueuesByKey } from "https://cdn.jsdelivr.net/npm/@jsdevs-sp/queue-hook@0.0.2/lib/index.js";
import { useQueue, getQueues, getQueuesByKey } from "./lib/index.js";

async function main() {
  const outputEl = document.querySelector('.output');
  const progressEl = document.querySelector('.progress');

  const manifest = await import('./manifest.js');

  const { loadQueue, loadQueueByItem } = useQueue('preload', manifest.default);

  loadQueue((queue) => {
    console.log('onComplete:', queue);
    console.log('Main::getQueues', getQueues());
    console.log('Main::getQueuesByKey', getQueuesByKey('preload'));
  });

  loadQueueByItem(({ item, progress, position, total }) => {
    console.log('onItemComplete', item, progress);
    outputEl.innerHTML = `
      ${outputEl.innerHTML}
      <p>${position}/${total} - ${item.key}</p>
    `;
    progressEl.textContent = `${progress * 100}%`;
  });
}

document.addEventListener('DOMContentLoaded', main);
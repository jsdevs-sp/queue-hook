# queue-hook

## Import

### Web Modules

```
<script type="module">
  import { useQueue, getQueues, getQueuesByKey } from "https://cdn.jsdelivr.net/npm/@jsdevs-sp/queue-hook@0.0.2/lib/index.js";
</script>
```

### Node Modules

```import { useQueue, getQueues, getQueuesByKey } from  "@jsdevs-sp/queue-hook"```

## Usage

### Manifest

```
const manifest = {
  foo: {
    url: 'mock/foo.json',
  },
  bar: {
    url: 'mock/bar.json',
  },
  image: {
    url: 'mock/image.jpg',
  },
}

```

### loadQueue

```
const { loadQueue } = useQueue('preload', manifest);

loadQueue((queue) => {
  console.log('onComplete:', queue);
});

```

### loadQueueByItem

```
const { loadQueueByItem } = useQueue('preload', manifest);

loadQueueByItem(({ item, key, progress, position }) => {
  console.log('onItemComplete', key, item, progress, position);
});
```

### getQueuesByKey

```
import { getQueuesByKey } from  "@jsdevs-sp/queue-hook;

getQueuesByKey('preload')
```

### getQueues

```
import { getQueues } from  "@jsdevs-sp/queue-hook;

getQueues()
```
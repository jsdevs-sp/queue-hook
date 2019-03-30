# queue-hook

## Import

### Web Modules

```
<script type="module">
  import { useQueue, getQueues, getQueuesByKey } from "https://cdn.jsdelivr.net/npm/@jsdevs-sp/queue-hook@0.0.2/lib/index.js";
</script>
```

### Node Modules

```npm install --save @jsdevs-sp/queue-hook```

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
import { useQueue } from  "@jsdevs-sp/queue-hook;

const { loadQueue } = useQueue('preload', manifest);

loadQueue((queue) => {
  console.log('onComplete:', queue);
});

```

### loadQueueByItem

```
import { useQueue } from  "@jsdevs-sp/queue-hook;

const { loadQueueByItem } = useQueue('preload', manifest);

loadQueueByItem(({ item, progress, position }) => {
  console.log('onItemComplete', item, progress, position);
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
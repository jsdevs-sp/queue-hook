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
const manifest = export default [
  {
    key: 'todos',
    url: 'https://jsonplaceholder.typicode.com/todos',
    loader: 'json',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default'
    }
  },
  {
    key: 'article-42',
    url: 'https://jsonplaceholder.typicode.com/posts/42',
    loader: 'json',
  },
  {
    key: 'create-user',
    url: 'http://localhost:8000/api/user',
    loader: 'json',
    options: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ a: 1, b: 2 })
    }
  },
  {
    key: 'foo',
    url: 'mock/foo.json',
    loader: 'json',
  },
  {
    key: 'bar',
    url: 'mock/bar.json',
    loader: 'json',
  },
  {
    key: 'image',
    url: 'mock/image.jpg',
    loader: 'image'
  }
]

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
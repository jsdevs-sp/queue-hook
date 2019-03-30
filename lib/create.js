const extension = value => value.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)[1];

export async function promise(item) {
  let loader;

  switch (extension(item.url)) {
    case 'json':
      loader = await import('./loaders/json');
      break;

    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'svg':
      loader = await import('./loaders/image');
      break;

    default: throw new Error(`QueueHook Error: Can't load asset ${item.url}`);
  }

  return loader.get(item.url);
}
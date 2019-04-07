export async function promise(item) {
  if (item.customLoader) {
    return item.customLoader(item);
  } else if (/^json$|^image$/.test(item.loader)) {
    const loader = await import(`./loaders/${item.loader}.js`);
    return loader.get(item);
  } else if (item.loader == undefined) {
    throw new Error(`QueueHook Error: You must set a Loader to "${item.url}"`);
  } else {
    throw new Error(`QueueHook Error: Loader "${item.loader}" doesn't exist!`);
  }
}
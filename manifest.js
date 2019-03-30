export default [
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
  // {
  //   key: 'create-user',
  //   url: 'http://localhost:8000/api/user',
  //   loader: 'json',
  //   options: {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ a: 1, b: 2 })
  //   }
  // },
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
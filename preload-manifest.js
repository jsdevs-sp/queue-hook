export default {
  a: (resolve, reject) => setTimeout(resolve, 1000, { message: 'a' }),
  b: (resolve, reject) => setTimeout(resolve, 1002, { message: 'b' }),
  c: (resolve, reject) => setTimeout(resolve, 1001, { message: 'c' }),
  d: (resolve, reject) => setTimeout(resolve, 1004, { message: 'd' }),
  foo: (resolve, reject) => {
    try {
      setTimeout(resolve, 9000, { message: 'foo' });
    } catch (error) {
      reject({ error })
    }
  },
  bar: (resolve, reject) => {
    try {
      setTimeout(resolve, 6000, { message: 'bar' });
    } catch (error) {
      reject({ error })
    }
  },
  // bar: (resolve, reject) => {
  //   setTimeout(reject, 100, { message: 'bar' });
  // },
}
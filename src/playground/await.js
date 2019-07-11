function ajaxLoadData(url) {

  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `data from ${url}`
      resolve(data)
    }, 100)
  })
}

async function app() {
  const comment = await ajaxLoadData('/comment/1')
  const user = await ajaxLoadData('/user/123')
  const post = await ajaxLoadData('/post/777')

  //...
  return 'finish message'
}

const res = app()

res.then(msg => console.log(msg))
let btnCheck = document.getElementById('btnCheck')

btnCheck.addEventListener('click', function () {
  console.log(location.href) //https://engsekine.github.io/natsuyonomagic/
  console.log(location.protocol) //https:
  console.log(location.host) //engsekine.github.io
  console.log(location.hostname) //engsekine.github.io
  console.log(location.port)
  console.log(location.pathname) //natsuyonomagic/
  console.log(location.search)
  console.log(location.hash)
})

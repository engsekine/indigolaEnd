//関数
function hello1(name) {
  const message = 'Hello, ' + name
  return message
}
const result1 = hello1('sekine1')
console.log(result1)
//アロー関数
const hello2 = (name) => {
  const message = 'Hello, ' + name
  return message
}
const result2 = hello2('sekine2')
console.log(result2)

//関数

window.addEventListener(
  'mousedown',
  function () {
    console.log('mousedown')
  },
  false
)
//アロー関数
window.addEventListener('mousedown', () => {
  console.log('mousedown')
})

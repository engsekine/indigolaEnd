//add クラスを追加する
//remove クラスを削除する
//contains クラスが含まれているか確認する
//toggle クラスが含まれていれば削除、含まれていなければ追加する
const test = document.getElementById('test')
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  if (test.classList.contains('test2')) {
    test.classList.remove('test2')
  } else {
    test.classList.add('test2')
  }
})
btn.addEventListener('click', () => {
  test.classList.toggle('test3')
})

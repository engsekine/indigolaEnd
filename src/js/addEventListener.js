//マウスボタン押したとき発動
window.addEventListener('mousedown', () => {
  console.log('mousedown')
})
//マウスボタン離したとき発動
window.addEventListener('mouseup', () => {
  console.log('mouseup')
})
//マウス動かしたとき発動
window.addEventListener('mousemove', () => {
  console.log('mousemove')
})
//キーボード入力文字押したとき発動
window.addEventListener('keypress', () => {
  console.log('keypress')
})
//キーボード押ているとき発動
window.addEventListener('keydown', () => {
  console.log('keydown')
})
//キーボード離したとき発動
window.addEventListener('keyup', () => {
  console.log('keyup')
})
//スクロールしたとき発動
window.addEventListener('scroll', () => {
  console.log('scroll')
})
//全てのロードが完了したら発動
window.addEventListener('load', () => {
  console.log('load')
})
//DOMが完成したら発動 DOM操作で<script></script>をheadタグ内に入れたいときに使える
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
})
//formを変更して入力ボタン押したとき発動
const form = document.forms.form
form.change.addEventListener('change', () => {
  console.log('change')
})
//submitボタン押したとき発動
const button = document.forms.form
button.addEventListener('submit', () => {
  console.log('submit')
})
//クリック時に発動
button.addEventListener('click', () => {
  console.log('click')
})

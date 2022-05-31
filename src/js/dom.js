//1.要素取得を定義する
const hogeUlId = document.getElementById('test') //idで要素を取得 定義の時
const hogeUlId2 = document.querySelectorAll('.test') //class名で要素を取得

//2.ノードウォーキング 要素を移動するために使う適宜順番を入れ替える 抜かしても良い
const hoge = hoge.parentNode.nextElementSibling.firstElementChild //hoge.上にある親要素.次にある要素の.最初の要素

//3.DOM操作定義
const hogeUlLi = document.createElement('li')

//4.タグの中に追加
hogeUlLi.id = 'test' //id名前追加
hogeUlLi.className = 'test' //class名前追加

hogeUlLi.style.cssText = 'font-weight: bold;font-size: 30px'

hogeUlLi.textContent = 'あいうえお' //中に文字生成
hogeUlLi.innerText = 'たちつてと' //中に文字生成

hogeAddLi.setAttribute('target', '_blank')
hogeAddLi.setAttribute('rel', 'noopener')
hogeAddLi.setAttribute('href', 'https://eng-sekine.com')

hogeAddLi.setAttribute('value', 'button')
hogeAddLi.setAttribute('type', 'submit')
hogeAddLi.setAttribute('name', 'button')

//画像
hogeAddLi.setAttribute('loading', 'lazy')
hogeAddLi.setAttribute('loading', 'eager')

hogeAddLi.removeAttribute('href') //削除

//5.タグを追加削除
hogeUlId.appendChild(hogeUlLi) //最後の要素に追加
hogeUlId.insertBefore(hogeUlLi, hoge) //ノードウォーキングした時
hogeUlId.removeChild(hogeUlLi) //要素削除

//ノードウォーキング
element.parentNode //親要素
element.firstElementChild //最初の子要素
element.lastElementChild //最後の子要素
element.children[0] //子要素リスト 数字を入れる
element.previousElementSibling //1つ前の要素
element.nextElementSibling //1つ後の要素

//a.要素をid直下に追加する時
const hogeAdd = document.getElementById('test') //idで要素を取得 定義の時
const hogeAddLi = document.createElement('li') //DOM操作追加
hogeAddLi.className = 'test' //class名前追加
hogeAddLi.innerText = 'たちつてと' //中に文字生成
hogeAdd.appendChild(hogeAddLi)

//b.要素を削除する時
const hogeRemove = document.getElementById('test')
if (hogeRemove.parentNode) {
  hogeRemove.parentNode.removeChild(hogeRemove)
}

//1.要素取得
document.getElementById('hoge') //idで要素を取得 定義
document.getElementsByClassName('hoge') //タグ名で要素を取得 定義

//2.要素取得を定義する
const hogeUl = document.getElementById('test') //idで要素を取得 定義の時

//3.HTMLタグ生成
const hogeUlLi = document.createElement('li')

//4.タグの中に追加
hogeUlLi.className = 'test' //class名前追加

hogeUlLi.textContent = 'あいうえお' //中に文字生成
hogeUlLi.innerText = 'たちつてと' //中に文字生成
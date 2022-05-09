console.log("./src/ts/index.ts");

// 1. id プロパティを使用して div 要素を選択する
const app = document.getElementById("app");

// 2. 新しい<p></p>要素をプログラムで作成する
const p = document.createElement("p");
const span = document.createElement("span");

// 3. テキストの内容を追加する
p.textContent = "./src/ts/index.ts";
span.textContent = "./src/ts/index.ts";

// 4. p 要素を div 要素に追加する
app?.appendChild(p);
app?.appendChild(span);
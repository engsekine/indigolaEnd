// 定義varは使わない　基本的にはconstを使う　再代入が必要な時はlet
// const　再代入不可能
const a = 'hoge'
    //b = "hoge2"
    // log
console.log(a)
console.info(a)
console.warn(a)
console.error(a)

// let 再代入可能
let b = 'hoge'
b = 'hoge2'
b = 'hoge3'
b = 'hoge4'
b = 'hoge5'
console.log(b)
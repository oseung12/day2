
//빈배열
//배열에 숫자를 채워넣는다 (1~45까지의 반복문을만든다)
const arr = []

for (let i = 1; i <= 45 ; i++) {
    arr.push(i)
}
console.log(arr)

//배열에서 6번 숫자 뽑기

for (let i = 0; i < 6; i++) {

    const idx = parseInt(Math.random() * arr.length)

    console.log(arr.splice(idx,1))


}
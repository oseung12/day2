

const arr = ['나이키', '아디다스', '노스페이스']

console.log(arr.length)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

//맨 마지막에 추가
const changedLength = arr.push("코오롱")

//최종 길이가 나온다
console.log(changedLength)

//console.log(arr.indexOf("르꼬끄"))

console.log(arr)

// 인덱스 위치에 있는 특정 값 지우기
arr.splice(1,1)

console.log(arr)

//break는 밑으로 빠진다
//for (let i = 0; i < arr.length ; i++) {
//    console.log(i)
//    console.log(arr[i])

//    if(arr[i] === '노스페이스') {
//        break
//    }
//}

//continue는 위로 빠진다
for (let i = 0; i < arr.length ; i++) {
    if(arr[i] === '노스페이스') {
        continue
    }
    console.log(i)
    console.log(arr[i])
}

console.log("-----------------------")


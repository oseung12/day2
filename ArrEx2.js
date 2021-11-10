

const arr = [54,22,14,64,95,85]

// 평균 = 모든 점수의 합(sum변수) / 개수

let sum = 0  // 오랫동안 사용할 변수는 바깥쪽으로 빼준다.// 변경이 가능해야하므로 일단 0
for (let i = 0; i < arr.length ; i++) {
    sum += arr[i] // i :  점수 // 현재 i 는 숫자이다.
    console.log(`SUM: ${sum}`) // sum 값 확인
}

let avg = (sum / arr.length).toFixed(3)

console.log("AVG: " + avg)

// 최저 방법1)최고점수를 임의로 지정하고 비교하여 변수를 바꿔준다.
let min = 101

for (let i = 0; i < arr.length ; i++){
    const score = arr[i]
    // 만일 score 가 min 작으면 swap
    //1)if 사용 // 2)값이 나오므로 삼항연산자 사용가능
    if(score < min){
        min = score
    }
}
console.log(`MIN: ${min}`)
// 최고
let max = -1
for (let i = 0; i < arr.length ; i++){
    const score = arr[i]
    // 만일 score 가 max 크면 swap
    //1)if 사용 // 2)값이 나오므로 삼항연산자 사용가능
    if(score > max){
        max = score
    }
}
console.log(`MAX: ${max}`)


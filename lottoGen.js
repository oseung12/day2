
// 로또 생성
// * 로또 ; 1 ~ 45 사이의 숫자 중 6개의 번호

// 1. 선언 방법 정하기 ( let // const 다음 중 어떠한 것으로 선언할것인가. )
// 6개의 값이 표출 될것이므로 따로 배열 처리 값 지정 하지 않음.
const arr = []

// 반복문 사용 while(true)
while(true) {

// 숫자 생성
// Math.random() ; 0과 1사이의 소수(1미만)이기때문에 값에 *45 ; 소수점으로 나옴
// parseInt 진수로 변환 (소수점을 버리면) 0 ~ 44 가 되므로 (이 값) + 1 ; 1 ~ 45 사이 숫자 생성
  const num = parseInt(Math.random() * 45) + 1

    console.log(num)

    const index = arr.indexOf(num) // num 검토 하게되면 index 가 나옴.

    // num 값과  index 값 중복이 발생하는지 확인하는 방법
    console.log(`NUM : ${num}  INDEX : ${index}`)  //index 가 0보다 같거나 작다. 이때 다시 뽑아야하므로 continue 작성.
    if(index >=0){
        continue
    }

    const newLength = arr.push(num)  //    if 조건에 해당 되지않으면 -1 값이 나옴 // arr.push(num)해주면 새로운 길이가 생성된다.


    if(newLength === 6) {
        break
    }    // 만일 newLength 가 6이되어 원하는 값이 나오면 break 해주어야한다.
}

console.log(arr) // 값 표출
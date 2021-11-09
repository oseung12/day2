
 // JS 배열(Array)
 // 배열이란 데이터의 묶음으로 다수의 데이터를 저장하고 처리하는 경우 유용하게 사용할 수 있다.
 // 각각의 데이터로서는 의미가 없으며 모여있을때 의미가 된다.
 // 대부분 규칙이 없으며, 반복처리가 필요한 상황(반복문),  비정형적인 데이터(상관관계가 없음)
 // 같은 종류의 데이터, 동일한 의미의 데이터가 많은 경우, 즉 반복처리가 필요한 데이터의 묶음이다.


 // 배열 생성 방법 1) 리터럴 대괄호[]사용하여 배열 선언.
 let arr1 = []
//console.log(arr1.length)
 //위와 같이 빈 배열을 생성할수 있으며, 이 배열의 길이는 o 이다.
  arr1[0] = 21
  arr1[1] = 'LOVE'
  arr1[2] = true
 console.log(arr1) // 결과값 ; [21, 'LOVE' , true]
 console.log(arr1.length) // 이 배열의 길이는 3 이다.
 // 위와 같이 빈 배열을 생성 후 배열 값을 입력 할 수 있다. ** 빈배열에 배열 값을 입력할때에는 const 사용 X

 const arr2 = ['토르', '이터널스', '스파이더맨', '어벤져스']
 console.log(arr2.length)
 // 위와 같이 배열의 초기값을 설정하면서 배열을 생성할수 있으며, 이 배열의 길이는 4 이다.

 const arr3 = ['banana' , 123, true]
 console.log(arr3.length)
 // 위와 같이 배열을 생성할 때에 여러가지 타입의 값을 담을 수 있다. 이 배열의 길이는 3 이다.


//배열의 값 보기
 console.log(arr2[0]) // 결과값; 토르
 console.log(arr2[1]) // 결과값; 이터널스
 console.log(arr2[2]) // 결과값; 스파이더맨
// console.log(arr2[4]) // 현재 값이 없으므로 undefined
 //배열의 첫번째는 0부터 시작된다.

 // 배열  특정 값 추가
 // 1) 배열의 끝에 요소를 추가 ; push
 const changedLength = arr2.push("닥터스트레인지")

 // 2) 배열의 앞에 요소를 추가 ; unshift
 const changedlength = arr2.unshift("베놈")

 // 배열의 최종 길이 확인
 console.log(changedlength) // 두가지가 추가되었기때문에 결과값;6
 console.log(arr2) //결과값 ; [ '베놈', '토르', '이터널스', '스파이더맨', '어벤져스', '닥터스트레인지' ]

 // 배열 인덱스 특정 값 삭제(제거) 지우기 splice('위치값n', '제거할 요소의 갯수)
 arr2.splice(0,1)
 console. log(arr2) // 결과값 ;[ '토르','이터널스', '스파이더맨', '어벤져스', '닥터스트레인지' ]

 //배열의 마지막 요소 제거하는 방법  배열이름.length-1
 arr2.length = arr2.length -1
 console.log(arr2) //결과값 ; [ '토르', '이터널스', '스파이더맨', '어벤져스' ]

 //배열의 첫번째 요소제거하는 방법 shift()
 arr2.shift()
 console.log(arr2) //결과값 ; [ '이터널스','스파이더맨', '어벤져스' ]

 //배열 안 항목의 인덱스 찾기 indexOf
console.log(arr2.indexOf("이터널스")) // 결과값; 0
console.log(arr2.indexOf("블랙팬서")) // 항목이 없기 때문에 결과값; -1


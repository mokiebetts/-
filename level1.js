// 1.두수의차

function solution(num1, num2) {
    return num1-num2
}

// 두수의 곱

function solution(num1, num2) {
    return num1*num2

}

//3.목구하기

function solution(num1, num2) {
    return Math.floor(num1 / num2);
}

//나이 출력

function solution(age) {
    return 2022-(age-1)
 }

 //

 //5.숫자 비교하기

 function solution(num1, num2) {
    if(num1===num2){
        return 1;
    }else if (num1!==num2){
        return -1 ;
    }
 }

 //6.두 수의합

 function solution(num1, num2) {
    var answer = -1;
    return answer;
}

//7. 두 수의 나눗셈

function solution(num1, num2) {
    return Math.floor((num1/num2)*1000);
 
 }

 //8. 각도기

 function solution(angle) {
    return angle < 90 ? 1 : angle ==90 ? 2 : angle<180 ? 3 : 4;
 }

 //짝수의 합

 function solution(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

//10. 배열의 평균값

function solution(numbers) {
    let sum = numbers.reduce ((acc, curr) => acc+ curr , 0);
    let avg = sum / numbers.length;
     return avg;
 }

 

// 짝수와 홀수

function solution(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


// 평균구하기 

function solution(arr) {
    const total = arr.reduce((acc, curr) => acc + curr, 0);
    const average = total / arr.length;
    return average;
}

//자릿수 더하기

function solution(n) {
    const digits = n.toString().split('').map(Number);
    const digitsum = digits.reduce((a, b) => a + b, 0)

    return digitsum;

}


//약수의합

function solution(n) {

    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    };
    return sum;
}


//나머지가 1이되는 수 찾기

function solution(n) {
    for (let x = 2; x < n; x++) {
        if (n % x === 1) {
            return x;
        }
    }
}


//x만큼 간격이 ㅣ있는 n개의 숫자


//빈함수를 만들고 넣자
//결과값에는 x를 i만큼 곱한값이 다 들어가고 i는 n보다 작아야한다.
//push이용

function solution(x, n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(x * i);
    }
    return result;
}



// 자연수 뒤집어 배열로 만들기


//문자화를 하고 분리한 후 내림차순으로 한다.
//나누면 이것의 밸류는 텍스트가 되기에 그 후에 넘버로 밸류를 바꿔준다.
//내림차순으로 하면 13254이런 수에서 에러가 생기기에 REVERSE라는 함수를 쓴다.


function solution(n) {
    let result = n.toString().split('').reverse().map(Number);
    return result;
}

//문자열을 정수로 바꾸기

//숫자로 바꾸고 
//정수로 바꾼다.

function solution(s) {
    const a = Number(s);
    const b = parseInt(a);
    return b;
}

//정수 제곱근 판별


//i를 나눠서 i가 나오면 제곱근
//i=1을 반환하고 아니라면 -1을 반환

function solution(n) {
    var answer = 0;

    for (let i = 0, a = 0; i <= n; i++) {
        if (n / i === i) {
            a = i + 1
            return a * a
        } else {
            answer = -1
        }
    }

    return answer;
}



// 20. 정수 내림차순으로 배치하기


//그냥 적힌대로 하자.
//문자열로 변환후, 하나하나로 분리하고 내침차순 하고 합친다.
//그러고 넘버화


function solution(n) {
    let a = String(n);
    let b = a.split('').sort((a, b) => b - a).join('');
    let c = Number(b);

    return c;
}
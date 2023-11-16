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


//21.하샤드의 수

//reduce을 사용하자


function solution(x) {
    let c = String(x).split('').map(Number).reduce((a, b) => a + b, 0);
    let d = x % c === 0

    return d;
}


//22.두 정수 사이의 합

//for 반복문으로 i를 더한값이 a와 b사이의 정수의 합으로 만들어주자.
//아래의 i값이 undefine되니 무엇이 문제 일 지 생각하다가 a와 b를 지정해주고 i값을 써야하지 않을까 싶었다.
//옆의 질문에는 a,b가 어느것이 큰지 아닌지가 정해진게 없기에 그것을 정해주었고 그안에 i값을 넣었다. 

function solution(a, b) {
    let start, end;


    if (a <= b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }

    let sum = 0;


    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}


//23콜라츠 추측
//우선, 1-1. 입력된 수가 짝수라면 2로 나눕니다. 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 이 부분을 있는 그대로 코딩으로 적었다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 이 부분에는 while을 써보자는 생각이 들었다. while은 본인이 걸어둔 조건이 일치하지 않으면 로직이 종류되어 그 값을 내는 명령어 이기에 !==1 이라는 것이 충족되지 못하면 로직은 종료될 것이며 1이 아니라면 로직은 계속해서 돌면서 카운트될것이다. 



function solution(num) {
    let count = 0;

    while (num !== 1) {
        if (count === 500) {
            return -1;
        }

        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }

        count++;
    }

    return count;
}


//24서울에서 김서방 찾기

//seoul의 인데스 kim의 벨류값이 x구나라는 생각이 들었다.
//그렇기에 x값을 서울의 kim이라는 인덱스의 밸류 값으로 설정
//김서방은 x에 있다. 라는 func을 만들어주었다. 

function solution(seoul) {
    const x = seoul.indexOf("Kim");
    return "김서방은 " + x + "에 있다";
}



//25나누어 떨어지는 숫자 배열

//a라는 함수를 설정할 것인데 우선, 조건은 arr의 객체중 divisor로 나눈값이 0이라는 조건을 충족시켜주기위해 filter을 이용해서 element 중 divisor로 나눈 것이 o인 element을 모아둔 arr을 a로 지정한다.
//후에 하나도 없으면 -1값을 주고 오름차순으로 배열해 주었다.

function solution(arr, divisor) {
    const a = arr.filter(element => element % divisor === 0);

    if (a.length === 0) {
        return [-1];
    }

    const b = a.sort((a, b) => a - b);

    return b;
}

//음양더하기

//for 문을 이용하자.양수 음수에 대해서는 signs[i]가 판단할 것이고 i는 0으로 계속커지면서 absolutes에 들어가는 숫자로 인식하였기에 absolutes.length보다 작은 수로 계속해서 커지며 

//signs[i] 가 맞으면 += 아니면 -=을 적는다. 


function solution(absolutes, signs) {

    let result = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            result += absolutes[i];
        } else {
            result -= absolutes[i];
        }
    }
    return result;
}

//핸드폰 가리기

//slice로 잘라서 replace로 *로 바꾸려고 했으며 찾아보니 /\d/g 은 d=숫자 g= 글로벌로 0~-4까지의 숫자를 *로 대체한 a
//뒤에서 4개짜른 b
//둘을 더한다. 


function solution(phone_number) {

    const length = phone_number.length;
    const a = phone_number.slice(0, length - 4).replace(/\d/g, '*');
    const b = phone_number.slice(-4);

    return a + b;
}


//없는 숫자 더하기

//흠...그냥 0~9까지 더한 수가 45이니 거기에 배열 numbers의 합을 빼주었다. 

function solution(numbers) {
    let a = numbers.reduce((acc, num) => acc + num, 0);
    return 45 - a;
}


//제일 작은 수 제거하기

//처음에는 내림차순으로 배열하고 제일 뒤에 값을 잘라내는 식을 생각했는데 만약 최소값이 중복되면 하나만 잘라내는 일이 생길것 같아 아예 미니멈값을 할당해서 그 값과 같은 값들은 필터되어서 제외할 수 있는 식을 써봤다.

//math.min은 숫자 함수로 배열에서 가장 작은 수를 뽑아내는 명령어이다.


function solution(arr) {
    if (arr.length <= 1) {
        return [-1];
    }

    const minimum = Math.min(...arr);
    const result = arr.filter(num => num !== minimum);

    return result.length > 0 ? result : [-1];
}


//가운데 글자 가져오기 

//우선, 가운데 함수를 찾아낼 내장함수가 필요했다.
//math.floor는 소수점 아래를 짤라내는 내장함수로 s의 길이를 반으로 나눈 값이 가운데면 floor 랭스 나눈기 2 는 가운데 함수를 두고 뒤에를 짤라내는 형식이다

// 짝수시 미들인덱스 앞뒤로 하나식 나타내고 홀수시 charAt내장함수로 함수내에서 미들에 있는 자리의 문자를 뽑아낸다.

function solution(s) {

    const middleIndex = Math.floor(s.length / 2);

    if (s.length % 2 === 0) {

        return s.slice(middleIndex - 1, middleIndex + 1);
    } else {

        return s.charAt(middleIndex);
    }
}


//수박수박수박수박수박수?

//음...for문을 써보자는 생각이 들었고 이게 n/2가 정수일때만을 생각하고 뒤에 수를 붙이는 방법으로 했다.
//만약 n/2가 3/2 면 mathflor 3/2인 i는 1일 것이고 그럼 수박 한번 반복하고 남은 반쪽은 만약 n을 i로 나눈값이 1이면 뒤에 "수"를 붙이기로했다.

function solution(n) {
    let result = "";

    for (let i = 0; i < Math.floor(n / 2); i++) {
        result += "수박";
    }

    if (n % 2 === 1) {
        result += "수";
    }

    return result;
}


//function solution(n) { return "수박".repeat(n / 2) + (n % 2 === 1 ? '수' : ''); }
//다른이는 이런식으로 쓰기도 했다


//.내적

//이건 모르겠어서 다른사람의 풀이를 썼다.
//아래와 같이 a라는 배열에 acc,val,index라는 요소까지 넣어서 즉, a+b*b[index] 형태의 반복문을 사용했다.
//이건 메모.

function solution(a, b) {
    return a.reduce((acc, val, index) => acc + val * b[index], 0);
}


//
function solution(a, b) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i] * b[i];
    }
    return sum;
}
//쉽게는 이런 방식도있다.


//약수의 개수와 덧셈

//약수의 개수를 나타내는 func를 먼저 만들자는 생각이들었다.
//후에 그 약수의 개수가 짝수면 +i 홀수면 -i를 적어주었다.

function solution(left, right) {
    function 약수의개수(num) {
        let count = 0;

        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                count++;
            }
        }

        return count;
    }
    let result = 0

    for (let i = left; i <= right; i++) {

        const A = 약수의개수(i);

        if (A % 2 === 0) {
            result += i;
        } else if (A % 2 === 1) {
            result -= i;
        }
    }
    return result;
}

//문자열 내림차순으로 배치하기

//많이 헛갈렸지만 a와b를 비교해서 a가 b보다 크면 -값을 갖기에 뒤로 보내지고 b가 a보다 크면 +값을 갖게해서 대문자 소문자 도 구분할 수 있게끔 했다.
function solution(s) {
    return s.split('').sort((a, b) => {
        if (a > b) return -1;
        if (b > a) return 1;
        return 0;
    }).join('');
}

//부족한 금액 계산하기

//이건 원래 하던 for 문을 사용했습니다.
//어려운것은 없었고 이 count을 더해서 totalcost을 내야한 다는것을 주의해야합니다. 

function solution(price, money, count) {
    let totalCost = 0;

    for (let i = 1; i <= count; i++) {
        totalCost += price * i;
    }

    const needMoney = totalCost - money;

    return needMoney > 0 ? needMoney : 0;
}
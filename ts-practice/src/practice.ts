// 함수에서 타입 정의하기

//                                  반환형 타입
function sum(x: number, y: number): number {
    return x + y;
    // return null; // 오류 발생!
}

sum(1, 2);

function sumArray(numbers: number[]): number {
    // 배열의 내장함수를 사용 할 때에도 타입 유추가 잘 이루어짐
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

// 함수가 아무것도 반환하지 않아야 할 때
function returnNothing(): void {
    console.log('I am just saying hello world');
}
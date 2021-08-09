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

//// interface 사용해보기

// 클래스에서 interface를 implements 하기

interface Shape {
    getArea(): number, 
    // Shape interface 에는 getArea 라는 함수가 있어야 하며 
    // 해당 함수의 반환값은 숫자여야함.
}

class Circle implements Shape {
    // 'implements' 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시합니다.
    radius: number; // 멤버 변수 radius 값을 설정합니다.

    constructor(radius: number) {
        this.radius = radius;
    }

    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})
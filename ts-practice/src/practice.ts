//// interface 사용해보기

// 클래스에서 interface를 implements 하기

interface Shape {
    getArea(): number, 
    // Shape interface 에는 getArea 라는 함수가 있어야 하며 
    // 해당 함수의 반환값은 숫자여야함.
}

class Circle implements Shape {
    // 'implements' 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시합니다.
    
    constructor(public radius: number) { // public 멤버 변수 설정
        this.radius = radius;
    }

    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) { // private 멤버 변수 설정
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})
// Generics

// 함수에서 Generics 사용하기
// function merge(a: any, b: any): any {
//   return {
//     ...a,
//     ...b,
//   };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });
// any 사용으로는 타입 유추가 전혀 되지 않음

// -->
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);

// interface 에서 Generics 사용하기
// interface Items<T> {
//   list: T[];
// }

// const items: Items<string> = {
//   list: ["a", "b", "c"],
// };

// type 에서 Generics 사용하기

type Items<T> = {
  list: T[];
};

const items: Items<string> = {
  list: ["a", "b", "c"],
};

// 클래스에서 Generics 사용하기

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
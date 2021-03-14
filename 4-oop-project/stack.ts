interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private head?: StackNode<T>;
  private _size: number = 0;
  get size() {
    return this._size;
  }
  push(value: T): void {
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  // null == undefined
  // nul !== undefined
  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is Empty!!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>();
stack.push("Ellie 1 ");
stack.push("Bob 2");
stack.push("steve 3");

while (stack.size != 0) {
  console.log(stack.pop());
}

stack.pop();

const stack2 = new StackImpl<number>();
stack2.push(123);
stack2.push(456);
stack2.push(789);

while (stack2.size != 0) {
  console.log(stack2.pop());
}

stack.pop();

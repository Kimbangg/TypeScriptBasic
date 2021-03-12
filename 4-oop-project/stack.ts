interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private head?: StackNode;
  private _size: number = 0;
  get size() {
    return this._size;
  }
  push(value: string): void {
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  // null == undefined
  // nul !== undefined
  pop(): string {
    if (this.head == null) {
      throw new Error("Stack is Empty!!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl();

stack.push("Ellie 1 ");
stack.push("Bob 2");
stack.push("steve 3");

while (stack.size != 0) {
  console.log(stack.pop());
}

stack.pop();

{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEithter<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left(): L {
      return this.leftValue;
    }
    right(): R {
      return this.rightValue;
    }
  } // end point

  const either = new SimpleEithter(4, 5);
  either.left();
  either.right();
}

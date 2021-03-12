{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // class를 abstract화 한다면, 그 자체를 오브젝트화 즉 instance로 만드는게 불가능하다.
  // 이러한 class를 부모로 삼아 쓰는 class 사이에서 다르게 쓰여야만 하는 Function들이 있다면
  // 그것을 abstract으로 하여, 오버라이딩 하지 않고도 자유롭게 사용이 가능하다
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level => 오브젝트별로 새로 생성되지 않는다.
    private coffeeBeans: number = 0; // istance(object)

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than zero");
      }
      this.coffeeBeans += beans * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private grindBeans(shots) {
      console.log(`grinding beans for $`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enought coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating machine before extracting Shots..");
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    clean(): void {
      console.log("cleaning the machine");
    }
  }

  // 자식 함수는 부모 함수의 constructor를 반드시 호출해줘야지  constructor를 만들 수 있다.
  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(serialNumber: string) {
      super(10);
      console.log(serialNumber);
    }
    private steamMilk(): void {
      console.log("Steaming Some Milk..🌪");
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const latteMachine = new CaffeeLatteMachine("70");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);

  const machines: CoffeeMaker[] = [
    new CaffeeLatteMachine("1"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("---------------------");
    machine.makeCoffee(1);
  });
}

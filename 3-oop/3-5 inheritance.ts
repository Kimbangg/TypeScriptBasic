{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level => 오브젝트별로 새로 생성되지 않는다.
    private coffeeBeans: number = 0; // istance(object)

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    // static을 통해 Object를 열어 주었다는건, 생성자를 통한 접근을 원치 않는 것.
    // 그리하여 constructor를 private으로
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than zero');
      }
      this.coffeeBeans += beans * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private grindBeans(shots) {
      console.log(`grinding beans for $`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enought coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating machine before extracting Shots..');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    clean(): void {
      console.log('cleaning the machine');
    }
  }

  // 자식 함수는 부모 함수의 constructor를 반드시 호출해줘야지  constructor를 만들 수 있다.
  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(serialNumber: string) {
      super(10);
      console.log(serialNumber);
    }
    private steamMilk(): void {
      console.log('Steaming Some Milk..🌪');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        shots,
        hasMilk: true,
      };
    }
  }

  const latteMachine = new CaffeeLatteMachine('70');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}

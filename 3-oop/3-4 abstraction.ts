{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level => 오브젝트별로 새로 생성되지 않는다.
    private coffeeBeans: number = 0; // istance(object)

    private constructor(coffeeBeans: number) {
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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  //const maker = new CoffeeMaker(3);
  // Constructor를 이용 가능하게 한 경우.
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  // 추상화를 위해 필요한 함수 외에는 private으로 제한
  // 또는 Interface & implemen로 구현
  maker.makeCoffee(2);

  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.clean();
  maker2.makeCoffee(2);

  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

  pro.makeCoffee();
}

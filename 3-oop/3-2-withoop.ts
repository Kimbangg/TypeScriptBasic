{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    
    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT : number = 7; // class level => 오브젝트별로 새로 생성되지 않는다.
        coffeeBeans : number = 0; // istance(object)

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans * CoffeeMaker.BEANS_GRAM_PER_SHOT;
        }

        static makeMachine(coffeeBeans:number):CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enought coffee beans!');
            } 
            this.coffeeBeans -= shots & CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            }
        }
    }

    const maker = new CoffeeMaker(3);
    console.log(maker);
    const maker2 = new CoffeeMaker(5);
    console.log(maker2);
    const maker3 = CoffeeMaker.makeMachine(4);
    console.log(maker3);
}
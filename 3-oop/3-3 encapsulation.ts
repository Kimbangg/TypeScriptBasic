{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    
    // public 기본적으로 설정이 된다.
    // private 외부 접근이 절대 불가능
    // protected 외부 접근은 안되고, 자식 클래스에서 조작이 가능하다.
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT : number = 7; // class level => 오브젝트별로 새로 생성되지 않는다.
        private coffeeBeans : number = 0; // istance(object)

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans * CoffeeMaker.BEANS_GRAM_PER_SHOT;
        }

        // static을 통해 Object를 열어 주었다는건, 생성자를 통한 접근을 원치 않는 것.
        // 그리하여 constructor를 private으로 
        static makeMachine(coffeeBeans:number):CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans : number) {
            if ( beans < 0 ) {
                throw new Error("value for beans should be greater than zero");
            } 
            this.coffeeBeans += beans * CoffeeMaker.BEANS_GRAM_PER_SHOT;
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

    //const maker = new CoffeeMaker(3);
    // Constructor를 이용 가능하게 한 경우.
    const maker = CoffeeMaker.makeMachine(32);

    class User {
        // private firstName : string;
        // private lastName : string;
        //fullName : string;

        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }

        private internalAge = 4;

        get age(): number {
            return this.internalAge;
        }

        set age(num:number) {
            if ( num < 0 ) {
                throw Error('Age must be more than 0');
            }
            this.internalAge = num;
        }
         
        constructor(private firstName: string, private lastName: string) {
            // this.firstName = firstName;
            // this.lastName = lastName;

           // this.fullName = `${firstName} ${lastName}`;
           // 위와 같이 선언을 한다면, 설정된 이후에 다른 parameter를 주더라도
           // 변경 되지 않는다.
        }
    }

    const user = new User('kim', 'donghyeon');
    console.log(user.fullName);
    // user.firstName = 'park';
    // console.log(user.fullName);
}
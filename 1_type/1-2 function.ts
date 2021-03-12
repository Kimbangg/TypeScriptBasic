{
    // //javscript
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }
    // //typescript
    // function add(num1 : number , num2 : number) : number {
    //     return num1 + num2;
    // }

    // function jsFetchNum(id) {
    //     // code ..
    //     // code ..
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // function fetchNum(id : string) : Promise<number> {
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // Optional Parameter
    // ? 를 기입하면 입력을 받을 수도 있고, 못 받을 수도 있다고 인식한다.
    function printName(firstName: string, lastname?: string ){
        console.log(firstName);
        console.log(lastname);
    }
    printName('Steve', 'Jobs'); 
    printName('Kim');
    printName('Anna', undefined);

    //Default Parameter
    function  printMessage(message: string = 'default message') {
        console.log(message)
    }
    printMessage();

    // Rest parameter
    function addNumbers (...numbers : number[]) : number {
        return numbers.reduce((a,b) => a+b);
    }
}
interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!!");
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(empolyee: Employee): Employee {
  empolyee.pay();
  return empolyee;
}

function pay<T extends Employee>(empolyee: T): T {
  empolyee.pay();
  return empolyee;
}

const donghyeon = new FullTimeEmployee();
const bob = new PartTimeEmployee();
const donghyeonAfterPay = pay(donghyeon);
const bobAfterPay = pay(bob);

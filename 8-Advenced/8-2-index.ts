{
  const obj = {
    name: "ellie",
  };

  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"];
  const text: Name = "hello";

  type Gender = Animal["gender"];
  type Keys = keyof Animal;
  // animal에 있는 모든 키를 가져온다.

  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "donghyeon",
    gender: "male",
  };
}

{
  type direction = "up" | "down" | "left" | "right" | "he";

  const position = { x: 0, y: 0 };

  function move1(command: direction) {
    switch (command) {
      case "up":
        return (position.y += 1);
        break;
      case "down":
        return (position.y -= 1);
      case "left":
        return (position.x -= 1);
      case "right":
        return (position.x += 1);
      case "he":
        position.x += 1;
        break;
      default:
        const invaild: never = command;
        throw new Error(`unknown direction : ${invaild}`);
      // he라는 direction까지 추가 되었을 때, 타입스크립트 컴파일러는 똑똑해서
      // 위에서 선언되지 않은 he(string) == commnad라는걸 안다.
      // 그리하여 never !== command 라는 에러를 알리는 것이다.
    }
  }

  {
    console.log(position); // { x: 0, y: 0}
    move("up");
    console.log(position); // { x: 0, y: 1}
    move("down");
    console.log(position); // { x: 0, y: 0}
    move("left");
    console.log(position); // { x: -1, y: 0}
    move("right");
    console.log(position); // { x: 0, y: 0}
  }
}

{
  // union types : or

  // 다양한 종류로 미리 결정 해두면, 선택지처럼 제공이 되어 사용이 가능하다.
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      result: "success",
      response: {
        body: "loggd in!",
      },
    };
  }

  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`${state.response.body}`);
    } else if ("reason" in state) {
      console.log(`${state.reason}`);
    }
  }
}
